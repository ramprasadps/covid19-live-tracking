import {Component, Input, OnInit} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
})
export class Card implements OnInit{
  @Input() active_title: string;
  @Input() active_count: number;

  @Input() confirmed_title: string;
  @Input() confirmed_count: number;

  @Input() decreased_title: string;
  @Input() decreased_count: number;

  @Input() recovered_title: string;
  @Input() recovered_count: number;

  ngOnInit(){
    this.active_title = "Active";
    this.active_count = 0;

    this.confirmed_title = "Confirmed";
    this.confirmed_count = 0;

    this.decreased_title = "Decreased";
    this.decreased_count = 0;

    this.recovered_title = "Recovered";
    this.recovered_count = 0;
  }

  public updateComponents(countMap: any){
    this.active_count = countMap['active'];
    this.confirmed_count = countMap['confirmed'];
    this.decreased_count = countMap['deaths'];
    this.recovered_count = countMap['recovered'];
  }
}
