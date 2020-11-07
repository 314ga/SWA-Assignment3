import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';
  weatherHistory: Object;
  weatherForecast: Object;
  fetchHistory: string = 'data/';
  fetchForecast: string = 'forecast/';
  selectedCity: string = 'Horsens'
  str: string = '';
  precipitation_types: string[];
  directions: string[];
  successResponse: Object;

  constructor(private restApi: RestAPIService) { }

  ngOnInit(): void {
    this.onBtnChangeHandler(this.selectedCity)
  }

  countClick() {
    this.clickCounter += 1;
  }
  postWeatherHistory() {
    this.restApi.postHistoricData("temperature", 150, "C", new Date(), "Horsens", "").subscribe(data => {
      this.successResponse = data;
      console.log(data);
    })

  }
  retrieveAllData() {
    this.restApi.getAllData(this.fetchHistory + "" + this.selectedCity).subscribe(data => {
      this.weatherHistory = data;
    });
    this.restApi.getAllData(this.fetchForecast + "" + this.selectedCity).subscribe(data => {
      this.weatherForecast = data;
      console.log(this.weatherForecast);
    });
    console.log(this.weatherHistory);


  }
  onBtnChangeHandler(city) {
    this.selectedCity = city;
    this.retrieveAllData();

    console.log(`onchange called`);
    console.log(this.selectedCity);



  }
}
