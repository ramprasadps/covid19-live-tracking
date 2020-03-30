import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LineChart } from './components/line-chart/line-chart';

@NgModule({
  declarations: [
    LineChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LineChart]
})
export class AppModule { }
