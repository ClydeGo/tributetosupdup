import { Component, ɵCodegenComponentFactoryResolver } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //values for change time
  myDate: string = moment().format();
  myTime: string;
  maxTime: string;
  tempTime: string;
  tempDate: string;
  timeframe: string;
  constructor() {}

  
  ionViewWillEnter() {
    this.maxTime = this.myDate.substring(11, 16);
    this.myTime = this.myDate;
    this.timeframe = this.myDate.substring(20, 25);
    this.tempTime = this.myDate.substring(11, 16);
    console.log(this.myDate);
  }

  // work around for time values not updating when date changes
  changeTime() {
    // this.tempTime = this.myDate.substring(11, 16);
    // this.tempDate = this.myDate.substring(0, 10);
    // const tempfram = this.myDate.substring(20, 25);

    // const date1 = this.myDate.substring(0, 10);
    // const date2 = this.myTime.substring(0, 10);

    // if(date1 === date2) {
    //   this.myDate = this.replaceAt(11, this.maxTime, this.myDate);
    //   const currentTime = this.myTime.substring(11, 16);
    //   console.log(currentTime, this.maxTime);
    //   if(currentTime > this.maxTime) {
    //     this.myTime = this.replaceAt(11, this.maxTime, this.myDate);
    //   }
    //   console.log(this.myDate);
    // } else {
    //   this.myDate = this.replaceAt(11, '23:59', this.myDate);
    //   console.log(this.myDate);
    // }
    console.log(this.myTime, '1');
    // this.myDate = (this.tempDate + 'T' + this.tempTime + ':00+' + tempfram);
    console.log(this.myTime, '2');
  }

  // replacing value using index
  replaceAt(index, replacement, date): string {
    return date.substr(0, index) + replacement + date.substr(index + replacement.length);
  }

  getTime() {
      this.tempTime = this.myTime.substring(11, 16);
      this.myTime = (this.tempDate + 'T' + this.tempTime + ':00+' + this.timeframe);
      this.changeTime();
  }

  getDate() {
    
    this.tempDate = this.myTime.substring(0, 10);
    this.myTime = (this.tempDate + 'T' + this.tempTime + ':00+' + this.timeframe);
    this.changeTime();
  }

}
