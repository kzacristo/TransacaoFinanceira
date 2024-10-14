import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-summary.component.html',
  styleUrl: './financial-summary.component.css'
})
export class FinancialSummaryComponent implements OnInit {
  summary: any;

  constructor(private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.transactionService.getSummary().subscribe((data) => {
      console.log(data)
      this.summary = data;
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

