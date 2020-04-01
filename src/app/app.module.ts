import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { LineChart } from './components/line-chart/line-chart';
// import {PieChart} from './components/pie-chart/pie-chart'
// import {Home} from './modules/home'
// import {Card} from './components/card/card'
import { TableGrid } from './components/table-grid/table-grid'
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
    TableGrid,
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
    TableGrid,
    // Dialog
    // Card
  ]
})
export class AppModule { }
