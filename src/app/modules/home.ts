import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Card} from '../components/card/card'

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'home-root',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class Home implements OnInit {
  ngOnInit() {
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
      
      var a = new Card();
      a.updateComponents(data['statewise'][0]);
      // data['statewise'].forEach((cases, index) => {
      // }, this);
    }.bind(this));
  }
}
