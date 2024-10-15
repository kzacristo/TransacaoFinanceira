import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        if (response && response.access_token) {
            console.log(credentials, response);
            localStorage.setItem('access_token', response.access_token);
        }
        return response;
      })
    );
  }

  // Função para verificar se o token está presente
  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  // Função para obter o token
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Função para deslogar
  logout(): void {
    localStorage.removeItem('access_token');
  }
}
