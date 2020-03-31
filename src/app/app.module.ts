import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { LineChart } from './components/line-chart/line-chart';
// import {PieChart} from './components/pie-chart/pie-chart'
// import {Home} from './modules/home'
// import {Card} from './components/card/card'
import {Grid} from './components/grid/grid'
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    // LineChart, 
    // PieChart
    // Home,
    Grid,
    // Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [
    // LineChart, 
    // PieChart
    // Home,
    Grid,
    // Card
  ]
})
export class AppModule { }
