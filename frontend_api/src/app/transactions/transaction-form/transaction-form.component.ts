import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction-form',
  standalone: true, // Define o componente como autônomo
  imports: [ReactiveFormsModule], // Importa o ReactiveFormsModule aqui
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private router: Router
  ) {
    // Inicializa o formulário reativo
    this.transactionForm = this.fb.group({
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]],
      data: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value)
      this.transactionService.addTransacao(this.transactionForm.value).subscribe(
        response => {
          console.log('Transaction added:', response);
          this.transactionForm.reset();
        });
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
