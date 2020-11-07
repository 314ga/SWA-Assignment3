import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material'
import { FilterModule} from './filter/filter.component.module';
import { FilterComponent } from './filter/filter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PostComponent } from './post/post.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    PostComponent,
    PostDialogComponent,
  ],
  entryComponents: [PostDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    FilterModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
