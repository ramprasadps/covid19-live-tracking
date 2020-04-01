import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DialogModal } from '../dialog-modal/dialog-modal';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface StateData {
  state: string;
  confirmed: number;
  active: number;
  death: number;
  recovered: number;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'table-grid',
  templateUrl: 'table-grid.html',
  styleUrls: ['table-grid.css'],
})
export class TableGrid implements OnInit {

  @Input() dataSource: any;
  @Input() totalConfirmed:number;
  @Input() totalActive:number;
  @Input() totalDecreased:number;
  @Input() totalRecovered:number;

  public ELEMENT_DATA: StateData[] = [];

  public stateWiseDataMap = {};

  displayedColumns: string[] = ['state', 'confirmed', 'death', 'recovered'];
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
          // this.totalMap = {
          //   state: cases['state'],
          //   confirmed: +cases['confirmed'],
          //   active: +cases['active'],
          //   death: +cases['deaths'],
          //   recovered: +cases['recovered']
          // };
          this.totalConfirmed = +cases['confirmed'];
          this.totalActive = +cases['active'];
          this.totalDecreased = +cases['deaths'];
          this.totalRecovered = +cases['recovered'];
        } else {
          this.ELEMENT_DATA.push(
            {
              state: cases['state'],
              confirmed: +cases['confirmed'],
              active: +cases['active'],
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
    var stateTotalConfirmed = clickedRow['confirmed'];
    var stateDataMap = this.stateWiseDataMap[state];
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DialogModal, {
      width: '250px',
      height: '400px',
      data: { state: state, stateTotalConfirmed: stateTotalConfirmed, districtData: stateDataMap['districtData'] }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      console.log(confirmed);
    });
  }
}