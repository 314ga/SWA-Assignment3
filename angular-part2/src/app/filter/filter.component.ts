import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../filter.service';
import { RestAPIService } from '../rest-api.service'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  //checking if filter is applied
  isFilterSet = false;
  //parameter passed from home "parrent" component
  @Input() cities: string;
  //calling function on the home "parent" component 
  @Output() returnData = new EventEmitter<Object[]>();
  //variable for date time picker
  dateTime: Date[];
  constructor(private filter: FilterService, private restApi: RestAPIService) {
  }

  ngOnInit(): void { 
  }

  //called when filter date time picker is set
  onChange(date: Date[]) 
  {
    this.isFilterSet = true;
    this.dateTime = date;
    this.filterData()
  }
  //if paremeter from home "parent" component is changes this function is called
  //and it checks if filter is set and calls filterData()
  ngOnChanges()
  {
    if(this.isFilterSet)
      this.filterData();
  }
  
  resetFilter()
  {
    this.dateTime = null;
    this.isFilterSet = false;
    this.filteredData(null);
  }

  //emit funcion on home "parent" component
  filteredData(value: Object[])
    {
      this.returnData.emit(value);
    };

  /**
   * Creates 2 promises(one for forecast one for history data) and put the into Promise.all
   * which waits until both of them are resolved and retrieved data are filtered using
   * Filter service, then the data are passed into the parent component for it to be able to show it
   * to the user
   */
  filterData(){
    let filteredHistoryData: Object;
    let filteredForecastData: Object;
    var historyPromise = this.restApi.getData("data/" + this.cities);
    var forecastPromise = this.restApi.getData("forecast/" + this.cities);
    Promise.all([historyPromise,forecastPromise]).then((promiseData)=>{
      filteredHistoryData = this.filter.getDataBetweenDates(promiseData[0],this.dateTime[0], this.dateTime[1]); 
      filteredForecastData = this.filter.getDataBetweenDates(promiseData[1],this.dateTime[0], this.dateTime[1]); 
      let filteredDataVar: Object[] = [filteredHistoryData,filteredForecastData];
      this.filteredData(filteredDataVar);
    }).catch((err)=>
    {
      console.log("Promise rejected" + err);
    });
   
  }
}
