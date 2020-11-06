import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
    imports: [MatInputModule, MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatSliderModule, MatButtonModule],
    exports: [MatInputModule, MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatSliderModule, MatButtonModule],
})
export class MaterialModule { }