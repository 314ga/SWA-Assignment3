import { NgModule } from "@angular/core";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
    imports: [OwlDateTimeModule, OwlNativeDateTimeModule],
    exports: [OwlDateTimeModule, OwlNativeDateTimeModule],
})
export class FilterModule { }