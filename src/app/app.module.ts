import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TvfetchService } from './tvfetch.service';
import { FeedobjectComponent } from './feedobject/feedobject.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedobjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TvfetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
