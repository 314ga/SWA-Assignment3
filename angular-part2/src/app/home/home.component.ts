import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities="Horsens";
  clickCounter: number = 0;
  name: string = '';
  weatherHistory: Object;
  weatherForecast: Object;
  precipitation_types: string[];
  directions: string[];
  successResponse: Object;

  constructor(private restApi: RestAPIService) { }

  onCityChange(data: string)
  {
    this.cities = data;
    this.retrieveAllData();
  }
  ngOnInit(): void {
    this.retrieveAllData();
  }

  /*
  *
  */
  retrieveAllData() {
    this.restApi.getAllData("data/" + this.cities).subscribe(data => {
      this.weatherHistory = data;
    });
    this.restApi.getAllData("forecast/" + this.cities).subscribe(data => {
      this.weatherForecast = data;
    });

  }
}
