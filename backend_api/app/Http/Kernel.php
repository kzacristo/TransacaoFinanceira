<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * Os middlewares globais que serão executados em todas as requisições.
     *
     * @var array
     */
    protected $middleware = [
        // Middleware para manutenção (quando o site está em manutenção)
        // \App\Http\Middleware\CheckForMaintenanceMode::class,
        // Middleware para validar o tamanho máximo da requisição
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        // Middleware para limpar espaços em branco de strings nas requisições
        // \App\Http\Middleware\TrimStrings::class,
        // Converter strings vazias para NULL
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        // Middleware para configurar proxies confiáveis (como load balancers)
        // \App\Http\Middleware\TrustProxies::class,
    ];

    /**
     * Os grupos de middlewares para rotas da aplicação.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            // Middleware para cookies criptografados
            \App\Http\Middleware\EncryptCookies::class,
            // Middleware para adicionar cookies à resposta
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            // Middleware para iniciar a sessão do usuário
            \Illuminate\Session\Middleware\StartSession::class,
            // Compartilhar erros da sessão nas views
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            // Middleware de CSRF para prevenir ataques de falsificação de requisições
            \App\Http\Middleware\VerifyCsrfToken::class,
            // Middleware para substituição de parâmetros nas rotas
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            // Limitar a taxa de requisições (para evitar sobrecarga)
            'throttle:api',
            // Substituir parâmetros nas rotas
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * Middlewares individuais que podem ser atribuídos às rotas.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        // Adicione o middleware de autenticação JWT
        'jwt.auth' => \App\Http\Middleware\JwtMiddleware::class,
    ];
}
