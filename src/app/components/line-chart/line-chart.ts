import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../canvasjs.min';

@Component({
    selector: 'line-chart',
    templateUrl: './line-chart.html',
    styleUrls: ['./line-chart.css']
})

export class LineChart implements OnInit {

    private dataList = [];
    ngOnInit() {
        $.getJSON("https://api.covid19india.org/data.json", function (data) {
            var dataMap = {};
            var total;
            dataMap['type'] = "column";
            dataMap['showInLegend'] = true;
            dataMap['legendMarkerColor'] = "grey";
            data['statewise'].forEach((cases, index) => {
                var totalCases = +cases['confirmed'];
                if (index === 0) {
                    total = totalCases
                } else if (totalCases !== 0) {
                    this.dataList.push({ y: totalCases, label: cases['state'] });
                }
            }, this);
            dataMap['legendText'] = "Total Confirmed : " + total;
            dataMap['dataPoints'] = this.dataList;
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                title: {
                    text: "State wise - Confirmed Cases"
                },
                axisY: {
                    title: "Confirmed Cases"
                },
                axisX: {
                    title: "States"
                },
                data: [dataMap]
            });
            chart.render();
        }.bind(this));
    }
}