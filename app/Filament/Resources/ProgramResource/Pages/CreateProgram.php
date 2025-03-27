<?php

namespace App\Filament\Resources\ProgramResource\Pages;

use App\Filament\Resources\ProgramResource;
use App\Helpers\Class\BaseResourceCreate;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateProgram extends BaseResourceCreate
{
    protected static string $resource = ProgramResource::class;
}
