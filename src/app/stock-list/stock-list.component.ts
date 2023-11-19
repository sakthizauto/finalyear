
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-stock-list',
  template: `
    <div>
      <h2>Stocks</h2>
      <ul>
        <li *ngFor="let stock of stocks">
          {{ stock.name }} - {{ stock.price }}
          <button (click)="buyStock.emit(stock)">Buy</button>
        </li>
      </ul>
    </div>
  `,
})

export class StockListComponent {
  @Input() stocks: any[] = [];
  @Output() buyStock = new EventEmitter<any>();
}
