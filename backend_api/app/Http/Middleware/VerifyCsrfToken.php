<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * As URIs que devem ser excluídas da verificação CSRF.
     *
     * @var array
     */
    protected $except = [
        // Adicione aqui as rotas que não precisam de verificação CSRF
        // Exemplo: 'api/*'
    ];
}
