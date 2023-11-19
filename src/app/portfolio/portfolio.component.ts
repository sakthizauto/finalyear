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
        </li>
      </ul>
    </div>
  `,
})
export class PortfolioComponent {
  @Input() portfolio: any[] = [];
}
