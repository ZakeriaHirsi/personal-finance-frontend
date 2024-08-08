import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  //  public customers = ['ronaldo', 'messi', 'neymar'];
  public items: any = [];

  constructor(private http: HttpClient) {}

  public getCustomers(): Observable<any> {
    return this.http.get<any>(
      'https://rest.coinapi.io/v1/assets?filter_asset_id=BTC&apikey=BBBC82D0-7F86-42C1-BF75-BD2BBE7C704E'
    ) as Observable<any>;
  }

  public getWebsocket(): any {
    return webSocket(
      'wss://fstream.binance.com/stream?streams=bnbusdt@aggTrade/btcusdt@markPrice'
    );
  }

  public getItems(): Observable<any> {
    return this.items as Observable<any>;
  }

  // getCars(): string[] {
  //   return this.customers;
  // }

  // getCar(id: number) {
  //   return this.customers[id];
  // }
}
