<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWTAuthController extends Controller
{
    public function login(Request $request)
    {
        // Validação dos dados de login
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        // Coleta apenas email e senha da requisição
        $credenciais = $request->only('email', 'password');

        // Tenta autenticar e gerar o token
        if (!$token = JWTAuth::attempt($credenciais)) {
            return response()->json(['error' => 'Credenciais inválidas'], 401);
        }

        // Retorna o token JWT em caso de sucesso
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60 // Define o tempo de expiração
        ]);
    }

    public function getUser()
    {
        // Retorna o usuário autenticado pelo token
        return response()->json(Auth::user());
    }

    /**
     * Função para fazer logout e invalidar o token.
     */
    public function logout()
    {
        // Invalida o token JWT
        Auth::logout();

        return response()->json(['message' => 'Logout realizado com sucesso']);
    }
}
