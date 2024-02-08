import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/app-component';


import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { AiAdvisorComponent } from './ai-advisor/ai-advisor.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { marketplaceComponent } from './marketplace/marketplace.component';
import { RouterModule } from '@angular/router';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { MyorderComponent } from './myorder/myorder.component';
import { FeedComponent } from './feed/feed.component';
import { SignupComponent } from './signup/signup.component';
import { StocksBuyComponent } from './stocksbuy/stocksbuy.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    DashboardcomponentComponent,
    AiAdvisorComponent,
    MyorderComponent,
    FeedComponent,
    SignupComponent,
    StocksBuyComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MarketplaceModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
