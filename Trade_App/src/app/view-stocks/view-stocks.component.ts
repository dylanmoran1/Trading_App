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
    stock: any = {}
    constructor() {
      
      this.stocksService.getAppleStockInfo()
      .then(data => {
        this.stock = data;
        return this.stock
      });
    }

}
