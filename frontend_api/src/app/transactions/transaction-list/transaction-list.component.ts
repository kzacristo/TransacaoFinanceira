import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transacao } from '../transacao.model';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transacoes: Transacao[] = [];
  searchId: number | undefined;
  searchTipo: string | undefined;
  errorMessage: string = '';

  constructor(private transactionService: TransactionService) { } // Injete o TransactionService

  ngOnInit(): void {
    this.loadTransacoes(); // Carregue as transações ao iniciar
  }

  loadTransacoes(): void {
    this.errorMessage = '';
    this.transactionService.getTransacoes().subscribe({
      next: (data: Transacao[]) => {
        console.log('Transações recebidas:', data);
        this.transacoes = data;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar as transações:', error;
        console.error('Erro ao carregar as transações:', error);
      },
      complete: () => {
        console.log('Carregamento das transações concluído.');
      }
    });
  }

  // Método para buscar por ID
  buscarPorId(): void {
    this.errorMessage = '';
    if (this.searchId) {
      this.transactionService.getTransacao(this.searchId).subscribe({
        next: (data: Transacao) => {
          this.transacoes = [data];
        },
        error: (error) => {
          alert(error.error.msg);
          this.loadTransacoes();
        }
      });
    } else {
      this.errorMessage = 'ID não encontrado';
      this.loadTransacoes();
    }
  }

  buscarPorTipo(): void {
    if (this.searchTipo) {
      this.errorMessage = '';
      this.transactionService.getTransacoes().subscribe({
        next: (data: Transacao[]) => {
          this.transacoes = data.filter(transacao => transacao.tipo === this.searchTipo);
        },
        error: (error) => {
          console.error('Erro ao buscar as transações:', error);
        }
      });
    } else {
      this.errorMessage = 'Não há transações do tipo especifica... Exibindo todas as transações';
      this.transactionService.getTransacoes().subscribe({
        next: (data: Transacao[]) => {
          this.transacoes = data;
        },
        error: (error) => {
          console.error('Erro ao buscar as transações:', error);
        }
      });
    }
  }

  // Método para deletar transação
  deletarTransacao(id: number): void {
    if (confirm('Você tem certeza que deseja deletar esta transação?')) {
      this.transactionService.deleteTransacao(id).subscribe({
        next: (response) => {
          console.log(response);
          this.loadTransacoes(); // Recarrega a lista após a exclusão
        },
        error: (error) => {
          console.error('Erro ao deletar a transação:', error);
          this.errorMessage = error.error.msg || 'Erro ao deletar a transação.';
        }
      });
    }
  }
}
