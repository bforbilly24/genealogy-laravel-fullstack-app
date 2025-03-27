<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('family_members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('spouse')->nullable();
            $table->text('address')->nullable();
            $table->string('birth_place')->nullable();
            $table->enum('gender', ['L', 'P'])->comment('L for Laki-laki; P for Perempuan')->nullable();
            $table->date('birth_date')->nullable();
            $table->integer('generation');
            $table->string('label')->nullable();
            $table->unsignedBigInteger('parent_id')->nullable();

            $table->foreign('parent_id')->references('id')->on('family_members');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('family_members');
    }
};
