import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service'
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {



  minDate = new Date();
  maxDate = new Date(30, 10, 2020)
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    //reference to the post dialog
    let dialogRef = this.dialog.open(PostDialogComponent, { data: { name: 'weather data' } });
    //now we can subscribe to the dialog 
    //this way we can get updated when the user sends data through the dialog and closes it
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`DialogResult: ${result}`);
      console.log(result);
    })
  }
}