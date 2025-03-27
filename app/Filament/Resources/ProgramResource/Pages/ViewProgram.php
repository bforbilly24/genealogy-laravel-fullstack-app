<?php

namespace App\Filament\Resources\ProgramResource\Pages;

use App\Filament\Resources\ProgramResource;
use App\Helpers\Class\BaseResourceView;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewProgram extends BaseResourceView
{
    protected static string $resource = ProgramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
