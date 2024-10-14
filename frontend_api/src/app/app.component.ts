import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinancialSummaryComponent } from './summary/financial-summary/financial-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FinancialSummaryComponent],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
