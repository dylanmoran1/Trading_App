import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-view-stocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-stocks.component.html',
  styleUrl: './view-stocks.component.scss'
})
export class ViewStocksComponent {
    stocksService = inject(StocksService);
    all_stocks : any[] = [];
  
    constructor() {
      
      this.stocksService.getAllPosts()
      .then(data => {
        this.all_stocks = data;
      });
    }

}
