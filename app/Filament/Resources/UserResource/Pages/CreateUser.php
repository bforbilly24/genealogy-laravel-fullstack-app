<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Helpers\Class\BaseResourceCreate;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateUser extends BaseResourceCreate
{
    protected static string $resource = UserResource::class;
}
