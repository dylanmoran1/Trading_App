import { Injectable } from '@angular/core';
import { Stock } from './stock';


@Injectable({
  providedIn: 'root'
})
export class StocksService {
  url = 'https://finnhub.io/api/v1'
  API_KEY = 'ct86vhhr01qtkv5rnrogct86vhhr01qtkv5rnrp0'

  constructor(
  ) {}

  async getAllUSStocks() {
    const data = await fetch(this.url)
  }

  async getAppleStockInfo() {
    const data = await fetch(`${this.url}/quote?symbol=AAPL&token=${this.API_KEY}`);
    return await data.json()
  }

  // async getAllPosts() : Promise<Stock[]> {
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }

  // async getPostById(id: number) : Promise<Stock> {
  //   const data = await fetch(`${this.url}/${id}`)
    
  //   return await data.json() ?? {}
  // }
}
