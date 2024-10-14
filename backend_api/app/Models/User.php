<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject 
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Implementação de JWTSubject
     */

    // Retorna o identificador que será armazenado no token JWT (geralmente a chave primária do usuário)
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    // Retorna um array de claims customizadas que você deseja adicionar ao token JWT
    public function getJWTCustomClaims()
    {
        return [];
    }
}
