import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../filter.service';
import { RestAPIService } from '../rest-api.service'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  isFilterSet = false;
  @Input() cities: string;
  @Output() returnData = new EventEmitter<Object[]>();
  dateTime: Date[];
  constructor(private filter: FilterService, private restApi: RestAPIService) {
  }

  onChange(date: Date[]) 
  {
    this.isFilterSet = true;
    this.dateTime = date;
    this.filterData()
  }

  ngOnInit(): void {
    
  }
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
  filteredData(value: Object[])
    {
      console.log("emiting");
      this.returnData.emit(value);
    };

  filterData(){
    let filteredHistoryData: Object;
    let filteredForecastData: Object;
    var historyPromise = this.restApi.getData("data/" + this.cities);
    var forecastPromise = this.restApi.getData("forecast/" + this.cities);
    Promise.all([historyPromise,forecastPromise]).then((promiseData)=>{
      filteredHistoryData = this.filter.getDataBetweenDates(promiseData[0],this.dateTime[0], this.dateTime[1]); 
      filteredForecastData = this.filter.getDataBetweenDates(promiseData[1],this.dateTime[0], this.dateTime[1]); 
      let filteredDataVar: Object[] = [filteredHistoryData,filteredForecastData];
      console.log(filteredHistoryData);
      console.log(filteredForecastData);
      this.filteredData(filteredDataVar);
    }).catch((err)=>
    {
      console.log("Promise rejected" + err);
    });
   
  }
}
