<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransacaoController;
use App\Http\Controllers\JWTAuthController;

Route::post('login', [JWTAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('/transacoes', [TransacaoController::class, 'index']);
    Route::post('/transacoes/add', [TransacaoController::class, 'store']);
    Route::get('/transacoes/{id}', [TransacaoController::class, 'show']);
    Route::put('/transacoes/{id}', [TransacaoController::class, 'update']);
    Route::delete('/transacoes/{id}', [TransacaoController::class, 'destroy']);
    Route::get('/transacoes/resumo', [TransacaoController::class, 'show']);
    Route::post('/transacoes/tipo', [TransacaoController::class, 'buscarPorTipo']);
    Route::post('/transacoes/buscar', [TransacaoController::class, 'buscarPorId']);

});
