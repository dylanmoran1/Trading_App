import { Component, inject } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-view-stocks',
  standalone: true,
  imports: [],
  templateUrl: './view-stocks.component.html',
  styleUrl: './view-stocks.component.scss'
})
export class ViewStocksComponent {
    stocksService = inject(StocksService);
    
  
    constructor() {
      const output = this.stocksService.getPostById(42);
      console.log(output)
    }

}
