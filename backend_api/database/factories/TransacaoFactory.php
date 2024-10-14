<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TransacaoFactory extends Factory
{

    public function definition(): array
    {
        return [
            'tipo' => $this->faker->randomElement(['Entrada', 'Saída']),
            'descricao' => $this->faker->sentence(3),
            'valor' => $this->faker->randomFloat(2, 10, 1000),
            'data' => $this->faker->date()
        ];
    }
}
