import { Component } from '@angular/core';

interface Stock {
  logoUrl: string; // You can provide the logo URL if available
  name: string; // Stock name
  description: string; // Description of the stock
  price: number; // Price of the stock
}

@Component({
  selector: 'app-stocksbuy',
  templateUrl: './stocksbuy.component.html',
  styleUrls: ['./stocksbuy.component.css']
})
export class StocksBuyComponent {
  stocks: Stock[] = [
    { 
      logoUrl: 'https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png', 
      name: 'Reliance Industries Ltd.', 
      description: 'Diversified conglomerate', 
      price: 2500 
    },
    { 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png', 
      name: 'Tata Consultancy Services Ltd.', 
      description: 'Information technology', 
      price: 3500 
    },
    { 
      logoUrl: 'https://logohistory.net/wp-content/uploads/2023/08/HDFC-Bank-Limited-Emblem.png', 
      name: 'HDFC Bank Ltd.', 
      description: 'Banking and financial services', 
      price: 1400 
    },
    { 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png', 
      name: 'Infosys Ltd.', 
      description: 'Information technology', 
      price: 1800 
    },
    { 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png', 
      name: 'ICICI Bank Ltd.', 
      description: 'Banking and financial services', 
      price: 650 
    },
    { 
      logoUrl: 'https://iconape.com/wp-content/files/vm/187820/svg/187820.svg', 
      name: 'Larsen & Toubro Ltd.', 
      description: 'Engineering and construction', 
      price: 1700 
    },
    { 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg', 
      name: 'Wipro Ltd.', 
      description: 'Information technology', 
      price: 500 
    },
    { 
      logoUrl: 'https://1000logos.net/wp-content/uploads/2023/03/HCL-Logo-1976.png', 
      name: 'HCL Technologies Ltd.', 
      description: 'Information technology', 
      price: 1200 
    },
    { 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png', 
      name: 'Axis Bank Ltd.', 
      description: 'Banking and financial services', 
      price: 700 
    }
  ];

  purchasedStocks: Stock[] = [];

  buyStock(stock: Stock) {
    const index = this.stocks.indexOf(stock);
    if (index !== -1) {
      this.stocks.splice(index, 1);
    }
    this.purchasedStocks.push(stock);
  }

  sellStock(stock: Stock) {
    const index = this.purchasedStocks.indexOf(stock);
    if (index !== -1) {
      this.purchasedStocks.splice(index, 1);
    }
  }
}
