import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BillsComponent } from './components/bills/bills.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BalancesComponent } from './components/balances/balances.component';
import { GoalsComponent } from './components/goals/goals.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { TransactionComponent } from './components/transaction/transaction.component';
import { ExpencesComponent } from './components/expences/expences.component';
import { AccdetailsComponent } from './components/balances/accdetails/accdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BillsComponent,
    SettingsComponent,
    SidebarComponent,
    OverviewComponent,
    BalancesComponent,
    GoalsComponent,
    TransactionComponent,
    ExpencesComponent,
    AccdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
