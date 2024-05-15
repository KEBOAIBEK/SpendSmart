import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BalancesComponent } from './components/balances/balances.component';
import { GoalsComponent } from './components/goals/goals.component';
import { BillsComponent } from './components/bills/bills.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ExpencesComponent } from './components/expences/expences.component';
import { AccdetailsComponent } from './components/balances/accdetails/accdetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sidebar',
        component: SidebarComponent,
        children: [
          {
            path: 'overview',
            component: OverviewComponent
          },
          {
            path: 'balances',
            component: BalancesComponent,
            children: [
            {
                path: 'accdetails',
                component:AccdetailsComponent
            }
            ]
          },
          {
            path: 'goals',
            component: GoalsComponent
          },
          {
            path: 'bills',
            component: BillsComponent
          },
          {
            path: 'settings',
            component: SettingsComponent
          },
          {
            path: 'transaction',
            component: TransactionComponent
          },
          {
            path: 'expences',
            component: ExpencesComponent
          }
        ]
      },
  {
    path: '**',
    component: HomeComponent,
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
