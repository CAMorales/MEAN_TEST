import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app/app.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from "./app-routing.module";

import { BearsComponent } from './bears/bears.component';
import { PageNotFoundComponent } from "./not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BearsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
