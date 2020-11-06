import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [MatFormFieldModule, MatDatepickerModule, MatSliderModule, MatButtonModule],
    exports: [MatFormFieldModule, MatDatepickerModule, MatSliderModule, MatButtonModule],
})
export class MaterialModule { }