import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private getStocks: GetStocksDataService,
    private router: Router
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
    });
  }

  openSelectedStock(stock){
    this.router.navigate(['stock'], {state: stock});
  }

}
