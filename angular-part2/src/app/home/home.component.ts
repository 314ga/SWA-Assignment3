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
  prectTypes: Object;

  constructor(private restApi: RestAPIService) { }

  ngOnInit(): void {
  }
  setPrecipitations(obj) {
    obj.forEach(element => {
      if (element == "") {
        this.str = element;
      }
      else {
        this.str += " " + element + ", ";
      }
    });
    console.log("precipitations");

    console.log(this.str);

  }
  countClick() {
    this.clickCounter += 1;
  }
  retrieveAllData(city) {
    this.restApi.getAllData(this.fetchHistory + "" + city).subscribe(data => {
      this.weatherHistory = data;
    });
    this.restApi.getAllData(this.fetchForecast + "" + city).subscribe(data => {
      this.weatherForecast = data;
      console.log(this.weatherForecast);
    });
    console.log(this.weatherHistory);


  }
  onBtnChangeHandler(city) {
    this.retrieveAllData(city);
    this.selectedCity = city;

  }
}
