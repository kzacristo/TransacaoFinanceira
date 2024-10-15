import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    // Inicializa o form com valores default
    this.loginForm = this.fb.group({
      email: ['test@example.com'],  // Valor pré-definido
      password: ['password']        // Valor pré-definido
    });
  }

  // Método para enviar o formulário
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login realizado com sucesso:', response);
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/transactions']); 
        },
        error: (error: any) => {
          console.error('Erro ao fazer login', error);
          this.errorMessage = 'Erro ao fazer login. Verifique suas credenciais.';
        }
      });
    }
  }
}
