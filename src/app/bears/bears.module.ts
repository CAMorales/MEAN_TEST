import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BearDetailComponent } from './bear-detail/bear-detail.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { BearsRoutingModule } from "./bears-routing.module";
import { BearsComponent } from "./bears/bears.component";
import { BearsService } from "./service/bears.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BearsRoutingModule
  ],
  declarations: [BearDetailComponent, BearsComponent],
  providers: [BearsService]
})
export class BearsModule { }
