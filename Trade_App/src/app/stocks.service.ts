import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './stock';


@Injectable({
  providedIn: 'root'
})
export class StocksService {
  url = 'https://jsonplaceholder.typicode.com/posts'


  constructor(
    private http:HttpClient
  ) {}

  // public getAllUSStocks() {
  //   this.http.get<Stock>('https://jsonplaceholder.typicode.com/posts');
  // }
  async getAllPosts() : Promise<Stock[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getPostById(id: number) {
    const data = await fetch(`${this.url}/${id}`);
    console.log(data.json())
    return data ?? {};
  }
}
