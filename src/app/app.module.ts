import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/app-component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { AiAdvisorComponent } from './ai-advisor/ai-advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuySellComponent,
    DashboardcomponentComponent,
    AiAdvisorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
