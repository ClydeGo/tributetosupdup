import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { stockData } from '../models/stockData';
import { GetStocksDataService } from '../services/get-stocks-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(
    private menu: MenuController,
    private getStocks: GetStocksDataService
    ) {
  }

  data: stockData[];

  ngOnInit() {
    this.menu.close();
  }

  ionViewWillEnter() {
    this.menu.close();
    this.getStocks.getStocksData().subscribe(stocks => {
      this.data = stocks;
      console.log(this.data);
    });
  }

}
