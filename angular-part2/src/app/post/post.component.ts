import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { RestAPIService } from '../rest-api.service'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {

  constructor(public dialog: MatDialog, private restApi: RestAPIService) { }

  ngOnInit(): void {

  }

  /**
   * Opens dialog window and send data into it with with open function
   * when dialog is closed all the data from the user inputs is passed from dialog 
   * to this component and result is post to the server with restApi service
   */
  openDialog(): void {
    //reference to the post dialog
    let dialogRef = this.dialog.open(PostDialogComponent, { data: { name: 'weather data' } });
    //now we can subscribe to the dialog 
    //this way we can get updated when the user sends data through the dialog and closes it
    dialogRef.afterClosed().subscribe(result => {
      console.log(`DialogResult: ${result.value}`);
      this.restApi.postHistoricData(result.type, (Number)(result.value), result.unit, result.time, result.city, result.extras).subscribe(data => {
        console.log(data);

        if (data.status == 201) {
          alert("Your weather data has been sucessfully registered :)");
        }
        else {
          alert("Status for posting data was" + data.status);
        }
      })
    })
  }
}