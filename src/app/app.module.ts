import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { LineChart } from './components/line-chart/line-chart';
import * as $ from 'jquery';

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
export class AppModule { 

  dataList = []

  constructor(){
    // $.getJSON("https://api.covid19india.org/data.json", function (data) {
    //         data['cases_time_series'].forEach(cases => {
    //           this.buildData(cases);
    //         });
    //         var lineChart = new LineChart();
    //         lineChart.updateChart(this.dataList);
    //     }.bind(this));
  }

  public buildData(cases){
    var data = {}
    data['type'] = "spline";
    data['visible'] = false;
    data['showInLegend'] = true;
    data['yValueFormatString'] = "##";
    data['name'] = cases['date'];
    data['dataPoints'] = this.buildDataPoints(cases);
    this.dataList.push(data);
  }

  public buildDataPoints(cases){
    		return [
			{ label: "Ep. 1", y: 2.22 },
			{ label: "Ep. 2", y: 2.20 },
			{ label: "Ep. 3", y: 2.44 },
			{ label: "Ep. 4", y: 2.45 },
			{ label: "Ep. 5", y: 2.58 },
			{ label: "Ep. 6", y: 2.44 },
			{ label: "Ep. 7", y: 2.40 },
			{ label: "Ep. 8", y: 2.72 },
			{ label: "Ep. 9", y: 2.66 },
			{ label: "Ep. 10", y: 3.04 }
    ]
    // var dataPoints = {};
    // dataPoints['label'] = 'totalconfirmed';
    // dataPoints['y'] = cases['totalconfirmed'];
    // return dataPoints;
  }
}
