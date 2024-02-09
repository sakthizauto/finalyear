// portfolio.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
  <div>
  <h2>Portfolio</h2>
  <ul>
    <li *ngFor="let stock of portfolio">
      {{ stock.name }} - {{ stock.quantity }}
      <button (click)="sellStock(stock)">Sell</button>
    </li>
  </ul>
</div>
  `,
})
export class PortfolioComponent {
  @Input() portfolio: any[] = [];

  sellStock(stock: any): void {
    // Implement the logic for selling the stock here.
    // Remove the sold stock from the portfolio array.
    const index = this.portfolio.indexOf(stock);
    if (index !== -1) {
      this.portfolio.splice(index, 1);
      console.log(`Selling ${stock.name}`);
    }
  }
}
