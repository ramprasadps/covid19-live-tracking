import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

export interface PeriodicElement {
  state: string;
  active: number;
  confirmed: number;
  death: number;
  recovered: number;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid',
  templateUrl: 'grid.html',
  styleUrls: ['grid.css'],
})
export class Grid implements OnInit {

  @Input() dataSource:any;

  public ELEMENT_DATA: PeriodicElement[] = [];

  displayedColumns: string[] = ['state', 'active', 'confirmed', 'death', 'recovered'];
  // dataSource = this.ELEMENT_DATA;
  ngOnInit() {
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      // this.tiles = [];
      // this.pieChartData = [];
      this.dataSource = this.ELEMENT_DATA;
      data['statewise'].forEach((cases, index) => {
        var total;
        if (index !== 0) {
          this.ELEMENT_DATA.push(
            {
              state: cases['state'], 
              active: +cases['active'],
              confirmed: +cases['confirmed'],
              death: +cases['deaths'],
              recovered: +cases['recovered']
          });
        }
      }, this);
    }.bind(this));
  }
}