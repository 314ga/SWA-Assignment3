import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRestApiComponent } from './test-rest-api/test-rest-api.component';
const routes: Routes = [
{path: '', component:TestRestApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 