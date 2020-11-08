import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})

//injecting data
export class PostDialogComponent implements OnInit {

  //we are not using it needs to be deleted
  cities: string[] = ['Horsens', 'Aarhus', 'Copenhagen'];

  /*what user passed from popup and injecting this data to post component which
  * contains logic for posting data to server*/
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
