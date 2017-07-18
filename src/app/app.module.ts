import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from "./app-routing.module";

import { PostsService } from "./services/posts.service";
import { BearsService } from "./services/bears.service";
import { BearsComponent } from './bears/bears.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BearsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService, BearsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
