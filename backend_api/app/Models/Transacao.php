<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    use HasFactory;

    protected $fillable = ['tipo', 'descricao', 'valor', 'data'];

    protected $guarded = ['id'];

    protected $casts = [
        'data' => 'datetime',
    ];

    public function setTipoAttribute($value)
    {
        $this->attributes['tipo'] = ucfirst($value);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
