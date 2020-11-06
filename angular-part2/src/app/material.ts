import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [MatInputModule, MatExpansionModule, MatButtonToggleModule, MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatSliderModule, MatButtonModule],
    exports: [MatInputModule, MatExpansionModule, MatButtonToggleModule, MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatSliderModule, MatButtonModule],
})
export class MaterialModule { }