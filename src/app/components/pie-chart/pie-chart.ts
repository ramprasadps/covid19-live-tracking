import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'pie-chart',
    templateUrl: './pie-chart.html'
})
export class PieChart implements OnInit {
    // Pie
    public pieChartLabels: Array<String> = ['Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Other'];
    public pieChartData: Array<number> = [50, 20, 20, 10, 10];
    public pieChartType: string = 'pie';

    ngOnInit() {
        $.getJSON("https://api.covid19india.org/data.json", function (data) {
            this.pieChartLabels = [];
            // this.pieChartData = [];
            data['statewise'].forEach((cases, index) => {
                var total;
                var totalCases = +cases['confirmed'];
                if (index === 0) {
                    total = totalCases
                } else if(totalCases !== 0) {
                    this.pieChartLabels.push(cases['state'])
                    this.pieChartData.push(totalCases)
                    // this.dataList.push({ y: totalCases, label: cases['state'] });
                }
            }, this);
            console.log(this.pieChartLabels);
            console.log(this.pieChartData);
        }.bind(this));
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}