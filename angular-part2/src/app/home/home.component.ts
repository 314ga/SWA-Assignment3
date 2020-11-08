import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { RestAPIService } from '../rest-api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities = "Horsens";
  clickCounter: number = 0;
  name: string = '';
  isFilterSet = false;
  weatherHistory: Object;
  weatherForecast: Object;
  //contains all precipitaion types
  precipitation_types: string[];
  directions: string[];

  constructor(private restApi: RestAPIService) { }

  onCityChange(data: string) {
    this.cities = data;
    if (!this.isFilterSet)
      this.retrieveAllData();
  }
  ngOnInit(): void {
    this.retrieveAllData();
  }

  /*
  *Callback method called from filter component
  */
  setFilterData(data: Object[]) {
    if (data != null) {
      this.isFilterSet = true;
      this.setData(data[0], data[1]);
    }
    else {
      this.isFilterSet = false;
      this.retrieveAllData();
    }

  }
  //refresh the data
  refreshData()
  {
    this.retrieveAllData();
  }

  //set data to the variables
  setData(historyData: Object, prediction: Object) {
    this.weatherHistory = historyData;
    this.weatherForecast = prediction;
  }

   /**
   * Creates 2 promises(one for forecast one for history data) and put the into Promise.all
   * which waits until both of them are resolved and then they are populated into the tables
   */
  retrieveAllData() {
    const historyPromise = this.restApi.getData("data/" + this.cities);
    const forecastPromise = this.restApi.getData("forecast/" + this.cities);
    Promise.all([historyPromise, forecastPromise]).then((promiseData) => {
      this.setData(promiseData[0], promiseData[1]);

    }).catch((err) => {
      console.log("Promise rejected" + err);
    });
  }
}
