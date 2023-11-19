// marketplace.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marketplaceComponent } from './marketplace.component';
import { StockListComponent } from '../stock-list/stock-list.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [marketplaceComponent, StockListComponent, PortfolioComponent],
    imports: [CommonModule, RouterModule,],
})
export class MarketplaceModule { }
