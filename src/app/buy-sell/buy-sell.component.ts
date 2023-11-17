import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { BuySellService } from '../buy-sell.service';
import { stock } from './stock.module';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.css']
})
export class BuySellComponent {
  stocks: stock[];
  cart: stock[];

  constructor(private buySellService: BuySellService) {
    this.stocks = buySellService.stocks;
    this.cart = buySellService.cart;
  }

  addToCart(stock: stock): void {
    this.buySellService.addToCart(stock);
  }

  removeFromCart(stock: stock): void {
    this.buySellService.removeFromCart(stock);
  }

  buy(): void {
    this.buySellService.buy();
  }
}
