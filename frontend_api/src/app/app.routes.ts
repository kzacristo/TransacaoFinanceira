import { RouterModule, Routes } from '@angular/router';
import { FinancialSummaryComponent } from './summary/financial-summary/financial-summary.component';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { LoginComponent } from './login-component/login-component.component';
import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/interceptors/login', pathMatch: 'full' },
  { path: 'transactions', component: TransactionListComponent, canActivate: [AuthGuard] },
  { path: 'transactions/add-transaction', component: TransactionFormComponent, canActivate: [AuthGuard] },
  { path: 'transactions/summary', component: FinancialSummaryComponent, canActivate: [AuthGuard] },
  { path: 'interceptors/login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}