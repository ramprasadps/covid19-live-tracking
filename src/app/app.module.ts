import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LineChart } from './components/line-chart/line-chart';
import {PieChart} from './components/pie-chart/pie-chart'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    LineChart, 
    PieChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [
    LineChart, 
    PieChart
  ]
})
export class AppModule { }
