import { RouterModule, Routes } from '@angular/router';
import { FinancialSummaryComponent } from './summary/financial-summary/financial-summary.component';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/transactions', pathMatch: 'full' },
    { path: 'transactions', component: TransactionListComponent },
    { path: 'transactions/add-transaction', component: TransactionFormComponent },
    { path: 'transactions/summary', component: FinancialSummaryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}