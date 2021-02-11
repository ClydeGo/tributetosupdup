import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { stockData } from '../models/stockData';

@Injectable({
  providedIn: 'root'
})
export class GetStocksDataService {

  constructor(
    private http: HttpClient
  ) { }

  //sample data for getting stock data
  private stocks: stockData[] = [
    {
      id: '1',
      symbol: 'TSLA',
      company: 'Tesla Inc',
      marketCap: '807.83B',
      price: '800',
      lastTweeted: '02/17/2009',
    },
    {
      id: '2',
      symbol: 'NIO',
      company: 'NIO',
      marketCap: '89.13B',
      price: '62',
      lastTweeted: '05/27/2015',
    },
    {
      id: '3',
      symbol: 'LMND',
      company: 'Lemonade Inc',
      marketCap: '8.70B',
      price: '140',
      lastTweeted: '01/17/2021',
    },
    {
      id: '4',
      symbol: 'SQ',
      company: 'Square Inc',
      marketCap: '519.43',
      price: '300',
      lastTweeted: '02/17/2020',
    }
  ];

  //get list of all stock data
  getStocksData(): Observable<stockData[]> {
    //to change to something that actually gets data from server
    return of(this.stocks);
  }

  //get stock data given stockID
  getStockData(stockID: string): Observable<stockData> {
    //TO ADD
    return 
  }

}
