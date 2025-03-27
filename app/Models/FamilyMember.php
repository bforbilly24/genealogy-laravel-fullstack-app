<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FamilyMember extends Model
{
    public $table = 'family_members';
    protected $fillable = [
        'name',
        'spouse',
        'address',
        'birth_place',
        'gender',
        'birth_date',
        'generation',
        'label',
        'parent_id',
    ];

    public function parent()
    {
        return $this->belongsTo(FamilyMember::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(FamilyMember::class, 'parent_id')->with('children');
    }
}
