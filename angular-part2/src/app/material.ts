import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";



@NgModule({
    imports: [MatSliderModule, MatButtonModule],
    exports: [MatSliderModule, MatButtonModule],
})
export class MaterialModule { }