import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { LineChart } from './components/line-chart/line-chart';
// import {PieChart} from './components/pie-chart/pie-chart'
// import {Home} from './modules/home'
// import {Card} from './components/card/card'
import { Grid } from './components/grid/grid'
import { DialogModal } from './components/dialog-modal/dialog-modal'
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    // LineChart, 
    // PieChart
    // Home,
    Grid,
    DialogModal
    // Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  entryComponents: [DialogModal],
  providers: [],
  bootstrap: [
    // LineChart, 
    // PieChart
    // Home,
    Grid,
    // Dialog
    // Card
  ]
})
export class AppModule { }
