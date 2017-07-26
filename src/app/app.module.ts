import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app/app.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { BearsModule } from './bears/bears.module';

import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BearsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
