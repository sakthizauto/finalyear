import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/app-component';
import { marketplaceComponent } from "./marketplace/marketplace.component"
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { AiAdvisorComponent } from './ai-advisor/ai-advisor.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { FeedComponent } from "./feed/feed.component";
import { SignupComponent } from './signup/signup.component';

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
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
