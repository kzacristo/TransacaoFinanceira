import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from '../transactions/transacao.model'; 

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 
  private apiUrl = 'http://localhost:8000/api/transacoes'; // URL da sua API

  constructor(private http: HttpClient) { } 

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token'); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }


  // Método para obter todas as transações
  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  // Método para adicionar uma nova transação
  addTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.apiUrl}/add`, transacao, { headers: this.getAuthHeaders() });
  }

  // Método para atualizar uma transação
  updateTransacao(id: number, transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(`${this.apiUrl}/${id}`, transacao, { headers: this.getAuthHeaders() });
  }

  // Método para excluir uma transação
  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  // Método para obter uma transação específica
  getTransacao(id: number): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.apiUrl}/buscar`, { id }, { headers: this.getAuthHeaders() });
  }

  // Método para obter o resumo das transação
  getSummary(): Observable<any> { 
    return this.http.get<any>(`${this.apiUrl}/show`, { headers: this.getAuthHeaders() });
  }
}
