import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dateTime: Date[];
  constructor() {
  }

  onChange(data: Date[]) {
    alert("Triggered" + data);
    console.log("Triggered", data);
  }

  ngOnInit(): void {
  }

}
