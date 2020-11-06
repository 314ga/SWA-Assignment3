import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService 
{
  constructor() { }

  /*Get filtered data between given dates
  *@param data of weather measurements
  *@startDate start date for filter
  *@endDate end date for filter
  **/
 getDataBetweenDates(data: any,startDate: Date, endDate: Date)
 {
    let filteredData = data.filter(function (later) {
        //to remove GTM +xx problem
        var t = new Date((later.time).substring(0, ((later.time).length) - 1));
        return t >= startDate && t < endDate;}
    );
    return filteredData;
 }
}
