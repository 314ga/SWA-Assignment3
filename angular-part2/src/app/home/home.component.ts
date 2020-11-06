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

  constructor(private restApi: RestAPIService) { }

  ngOnInit(): void {
    this.restApi.getAllData("data").subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    // this.restApi.postHistoricData("temperature", 150, "C", new Date(), "Horsens", "").subscribe(data => {
    //   this.succesResponse = data;
    //   console.log(data);
    // }) 
  }
  countClick() {
    this.clickCounter += 1;
  }

}
