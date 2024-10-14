import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from '../transactions/transacao.model'; // Importando o modelo de transação

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 
  private apiUrl = 'http://127.0.0.1:8000/api/transacoes'; // URL da sua API

  constructor(private http: HttpClient) { } // Injete o HttpClient

  // Método para obter todas as transações
  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.apiUrl);
  }

  // Método para adicionar uma nova transação
  addTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.apiUrl}/add`, transacao);
  }

  // Método para atualizar uma transação
  updateTransacao(id: number, transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(`${this.apiUrl}/${id}`, transacao);
  }

  // Método para excluir uma transação
  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para obter uma transação específica
  getTransacao(id: number): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.apiUrl}/buscar`, { id });
  }

  // Método para obter o resumo das transação
  getSummary(): Observable<any> { 
    return this.http.get<any>(`${this.apiUrl}/show`);
  }
}
