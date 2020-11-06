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
  weatherData: Object;
  fetchFrom: string = 'data';
  fetchHistory: string = 'data';
  fetchForecast: string = 'forecast';

  constructor(private restApi: RestAPIService) { }

  ngOnInit(): void {
    // this.restApi.getAllData(this.fetchHistory).subscribe(data => {
    //   this.weatherData = data;
    //   console.log(this.weatherData);
    // });
    // this.restApi.getAllData(this.fetchForecast).subscribe(data => {
    //   this.weatherData = data;
    //   console.log(this.weatherData);
    // });
  }
  countClick() {
    this.clickCounter += 1;
  }

  getWeatherData(place) {
    this.fetchForecast = place;

    this.restApi.getAllData(this.fetchHistory + "/" + place).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });

  }
}
