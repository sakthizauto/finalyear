import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/app-component';
import { marketplaceComponent } from "./marketplace/marketplace.component"
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { AiAdvisorComponent } from './ai-advisor/ai-advisor.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { FeedComponent } from "./feed/feed.component"

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
  },
  {
    component: DashboardcomponentComponent,
    path: 'dashboard',
  },

  {
    component: marketplaceComponent,
    path: 'marketplace',
  },
  {
    component: AiAdvisorComponent,
    path: 'ai-advisor',
  },
  {
    component: FeedComponent,
    path: 'feed',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
