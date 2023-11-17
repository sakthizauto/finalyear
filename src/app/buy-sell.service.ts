import { Injectable } from '@angular/core';
import { stock } from './buy-sell/stock.module';

@Injectable({
  providedIn: 'root'
})
export class BuySellService {

  constructor() { }

  stocks: stock[] = [
    { id: 1, name: 'Reliance Industries', price: 2500 },
    { id: 2, name: 'Tata Consultancy Services', price: 3200 },
    { id: 3, name: 'HDFC Bank', price: 1500 },
    { id: 4, name: 'Infosys', price: 1400 },
    { id: 5, name: 'ITC Limited', price: 220 },
    { id: 6, name: 'State Bank of India', price: 400 },
    { id: 7, name: 'Hindustan Unilever', price: 1800 },
    { id: 8, name: 'Wipro', price: 300 },
    { id: 9, name: 'ICICI Bank', price: 600 },
    { id: 10, name: 'Axis Bank', price: 700 },
    { id: 11, name: 'Maruti Suzuki', price: 7500 },
    { id: 12, name: 'Mahindra & Mahindra', price: 900 },
    { id: 13, name: 'Bharti Airtel', price: 450 },
    { id: 14, name: 'Sun Pharmaceutical', price: 550 },
    { id: 15, name: 'Tata Motors', price: 180 },

    // Add more products as needed
  ];

  cart: stock[] = [];

  addToCart(stock: stock): void {
    this.cart.push(stock);
  }

  removeFromCart(stock: stock): void {
    const index = this.cart.indexOf(stock);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  buy(): void {
    // Implement logic for the buying process
    console.log('Buying products:', this.cart);
    this.cart = []; // Clear the cart after buying
  }
}
