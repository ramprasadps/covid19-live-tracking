import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DialogModal } from '../dialog-modal/dialog-modal';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface StateData {
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

  @Input() dataSource: any;

  public ELEMENT_DATA: StateData[] = [];

  public stateWiseDataMap = {};

  displayedColumns: string[] = ['state', 'confirmed', 'active', 'death', 'recovered'];
  // dataSource = this.ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      // this.tiles = [];
      // this.pieChartData = [];
      this.dataSource = this.ELEMENT_DATA;
      this.totalMap = {};
      data['statewise'].forEach((cases, index) => {
        var total;
        if (index === 0) {
          this.totalMap = {
            state: cases['state'],
            active: +cases['active'],
            confirmed: +cases['confirmed'],
            death: +cases['deaths'],
            recovered: +cases['recovered']
          };
        } else {
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
      this.ELEMENT_DATA.push(this.totalMap);
    }.bind(this));

    $.getJSON("https://api.covid19india.org/state_district_wise.json", function (data) {
      this.stateWiseDataMap = data;
    }.bind(this));
  }

  public getStateDetails(clickedRow) {
    var state = clickedRow['state'];
    var stateDataMap = this.stateWiseDataMap[state];
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DialogModal, {
      width: '250px',
      height: '400px',
      data: { state: state, districtData: stateDataMap['districtData'] }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      console.log(confirmed);
    });
  }
}