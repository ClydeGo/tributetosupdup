import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stockData } from '../models/stockData';
import { GetStocksDataService } from '../services/get-stocks-data.service';

@Component({
  selector: 'app-selected-stock',
  templateUrl: './selected-stock.page.html',
  styleUrls: ['./selected-stock.page.scss'],
})
export class SelectedStockPage implements OnInit {

  stockID: any;
  stock: stockData;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getStocks: GetStocksDataService
  ) { 
    if(!this.router.getCurrentNavigation().extras.state) { 
      router.navigate(['overview']);
    }
    this.stockID = (this.router.getCurrentNavigation().extras.state).id;
  }

  ngOnInit() {
    this.getStocks.getStockData(this.stockID).subscribe(stock => {
      this.stock = stock;
      console.log(this.stock);
    });
  }

}
