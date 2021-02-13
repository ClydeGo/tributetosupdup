import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { stockData } from '../models/stockData';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetStocksDataService {

  constructor(
    private http: HttpClient
  ) { }

  //get list of all stock data
  getStocksData(): Observable<stockData[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' ,'http://localhost:3000');

    return this.http.get<stockData[]>('http://localhost:3000/api/getStocksData', { headers }).pipe(retry(3));
  }

  //get stock data given stockID
  getStockData(stockID: string): Observable<stockData> { 
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' ,'http://localhost:3000');
    const params = new HttpParams().append('stockID', stockID);
    
    return this.http.get<stockData>('http://localhost:3000/api/getStockData', { headers , params }).pipe(retry(3)); 
  }

}
