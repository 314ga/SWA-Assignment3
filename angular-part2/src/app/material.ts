import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { } from '@angular/material/datepicker';
import { } from '@angular/material/datepicker';

//imports for material components
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
    imports: [OwlDateTimeModule, OwlNativeDateTimeModule,MatDatepickerModule, MatInputModule, MatExpansionModule, MatButtonToggleModule, MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatSliderModule, MatButtonModule],
    exports: [OwlDateTimeModule, OwlNativeDateTimeModule,MatDatepickerModule, MatInputModule, MatExpansionModule, MatButtonToggleModule, MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatSliderModule, MatButtonModule],
})
export class MaterialModule { }