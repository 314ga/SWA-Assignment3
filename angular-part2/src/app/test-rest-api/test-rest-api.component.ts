import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service';
@Component({
  selector: 'app-test-rest-api',
  templateUrl: './test-rest-api.component.html',
  styleUrls: ['./test-rest-api.component.css']
})
export class TestRestApiComponent implements OnInit {

  weatherData: Object;
  constructor(private restApi: RestAPIService) { }

  ngOnInit(): void {

    this.restApi.getAllData("data").subscribe(data =>{
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

}
