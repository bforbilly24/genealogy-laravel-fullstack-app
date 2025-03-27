<?php

namespace App\Filament\Resources\ProgramResource\Pages;

use App\Filament\Resources\ProgramResource;
use App\Helpers\Class\BaseResourceList;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPrograms extends BaseResourceList
{
    protected static string $resource = ProgramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
