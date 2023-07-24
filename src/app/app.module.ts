import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentComponent} from "./components/content/content/content.component";
import { HomeComponent } from './components/content/home/home.component';
import { ContactComponent } from './components/content/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
