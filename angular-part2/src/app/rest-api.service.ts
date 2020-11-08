import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  configUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  /*Get data from the server 
  *@param type is for edding desired URL ending for base URL
  **/
  getData(type: string) {
    const options = {
      responseType: 'json' as const,
    };
    return this.http.get<Config>(this.configUrl + type, options)
      .pipe(catchError(this.handleError)
      ).toPromise();
  }
  /*Post historic data to the server 
  *@param type, e.g. Temperature
  *@param unit unit for measurements
  *@param dateTime date and time of measurements
  *@param place - place of measurements, e.g. Horsens
  *@param extras - if this method shoud post precipitation or wind ahs to set type of it, e.g. East, rain...
  *@param value - value of measurements, e.g. 55
  **/
  postHistoricData(type: string, value: number, unit: string, dateTime: string, place: string, extras: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'response'
    };
    if (type == 'precipipitation')
      return this.http.post<any>(this.configUrl + "data", {
        value: value, precipitation_type: extras, type: type, unit: unit,
        time: dateTime, place: place
      }, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    else if (type == 'wind speed') {
      return this.http.post<any>(this.configUrl + "data", {
        value: value, precipitation_type: extras, type: type, unit: unit,
        time: dateTime, place: place
      }, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
    else {
      return this.http.post<any>(this.configUrl + "data", {
        value: value, type: type, unit: unit,
        time: dateTime, place: place
      }, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
  };

  /*Handles errors of http requests
  *@error of the request
  **/
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  /*USAGE:
  this.restApi.getAllData("data").subscribe(data =>{
      this.weatherData = data;
      console.log(this.weatherData);
    });
    this.restApi.postHistoricData("temperature",150,"C",new Date(),"Horsens","").subscribe(data => {
      this.succesResponse = data;
      console.log(data);
  })*/
}
