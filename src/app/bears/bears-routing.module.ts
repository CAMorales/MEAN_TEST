
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BearsComponent } from "./bears/bears.component";
import { BearDetailComponent } from "./bear-detail/bear-detail.component";

// Define the routes
const routes: Routes = [
  { path: 'bears', component: BearsComponent },
  { path: 'detail/:id', component: BearDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BearsRoutingModule { }