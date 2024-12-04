import { Component } from '@angular/core';
import { ViewStocksComponent } from "../view-stocks/view-stocks.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ViewStocksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
