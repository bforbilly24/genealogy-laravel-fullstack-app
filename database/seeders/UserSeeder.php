<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin Family',
            'email' => 'admin@family.com',
            'password' => Hash::make('admin456'),
        ]);
    }
}
