import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Exchange {
  name: string;
}

interface Symbol {
  symbol: string;
}

interface MarketDataPoint {
  date: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {
  exchanges: Exchange[] = [];
  symbols: Symbol[] = [];
  selectedExchange: string = '';
  selectedSymbol: string = '';
  marketData: MarketDataPoint[] = [];
  baseApiUrl: string = 'http://localhost:4200/md';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<string[]>(this.baseApiUrl + '/exchanges')
      .subscribe(exchangeNames => {
        this.exchanges = exchangeNames.map(name => ({name})); // Map to Exchange objects
      });
  }

  onExchangeChange(exchange: string) {
    this.selectedExchange = exchange;
    this.symbols = [];
    this.marketData = [];
    this.selectedSymbol = '';

    if (exchange) {
      this.http.get<string[]>(this.baseApiUrl + `/${exchange}/top10symbols`)
        .subscribe(symbolStrings => {
          this.symbols = symbolStrings.map(symbol => ({symbol})); // Map to {symbol: string} objects
        });
    }
  }

  onSymbolChange(symbol: string) {
    this.selectedSymbol = symbol;
    this.marketData = [];

    if (symbol) {
      this.http.get<MarketDataPoint[]>(this.baseApiUrl + `/${symbol}/points`).subscribe(data => {
        this.marketData = data;
      });
    }
  }
}
