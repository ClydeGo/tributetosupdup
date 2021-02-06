import { Component } from '@angular/core';
import * as moment from 'moment';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any;

  constructor(
    private getData: GetDataService
  ) {
    getData.getMedicine().subscribe((data)=> {
      this.data = data;

      this.data.forEach(element => {
        element.date = moment(element.date).format('MM-DD-YYYY');
      });
    });
  }

  openBlood($event){
    this.getData.openBloodDetail($event);
  }

  openSummary(){
    alert('summary opened');
  }

}
