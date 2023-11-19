// src/app/app.component.ts

import { Component } from '@angular/core';
import { Stock } from 'src/app/models/models';
import { StockListComponent } from 'src/app/stock-list/stock-list.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './marketplace.component.html',
  styleUrls: ["marketplace.component.css"]
})
export class marketplaceComponent {
  stocks: Stock[] = [

    { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', price: 2500.0 },
    { symbol: 'TCS', name: 'Tata Consultancy Services Ltd.', price: 3500.0 },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', price: 1400.0 },
    { symbol: 'INFY', name: 'Infosys Ltd.', price: 1800.0 },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd.', price: 650.0 },
    { symbol: 'LT', name: 'Larsen & Toubro Ltd.', price: 1700.0 },
    { symbol: 'WIPRO', name: 'Wipro Ltd.', price: 500.0 },
    { symbol: 'HCLTECH', name: 'HCL Technologies Ltd.', price: 1200.0 },
    { symbol: 'AXISBANK', name: 'Axis Bank Ltd.', price: 700.0 },
    // Add more stocks as needed
  ];


  portfolio: Stock[] = [];

  buyStock(stock: Stock) {
    // Add the selected stock to the portfolio
    this.portfolio.push({ ...stock, quantity: 1 });
  }
}
