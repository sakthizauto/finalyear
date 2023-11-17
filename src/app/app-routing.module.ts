import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/app-component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { AiAdvisorComponent } from './ai-advisor/ai-advisor.component';

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
    component: BuySellComponent,
    path: 'marketplace',
  },
  {
    component: AiAdvisorComponent,
    path: 'ai-advisor',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
