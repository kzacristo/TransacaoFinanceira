import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionService } from './services/transaction.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    declarations: [
        TransactionListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }, TransactionService],
})
export class AppModule { }
