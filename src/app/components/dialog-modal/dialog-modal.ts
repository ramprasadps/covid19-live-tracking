import { Component, Input, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface StateWiseData {
  district: string;
  confirmed: number;
}

@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.html',
  styleUrls: ['dialog-modal.css'],
})
export class DialogModal implements OnInit {

  districtName: string;
  @Input() dataSource: any;

  public ELEMENT_DATA: StateWiseData[] = [];

  displayedColumns: string[] = ['state', 'confirmed'];

  constructor(
    public dialogRef: MatDialogRef<DialogModal>,
    @Inject(MAT_DIALOG_DATA) public data) {
    
  }

  ngOnInit() {
    this.districtName = this.data['state'];
    var districtData = this.data['districtData']
    for (let districtKey in districtData) {
      this.ELEMENT_DATA.push(
        {
          district: districtKey,
          confirmed: +districtData[districtKey]['confirmed']
        });
    }
    this.dataSource = [...this.ELEMENT_DATA]
   }
}