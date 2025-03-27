<?php

namespace App\Filament\Resources\ProgramResource\Pages;

use App\Filament\Resources\ProgramResource;
use App\Helpers\Class\BaseResourceEdit;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProgram extends BaseResourceEdit
{
    protected static string $resource = ProgramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
