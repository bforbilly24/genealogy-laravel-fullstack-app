<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Helpers\Class\BaseResourceEdit;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditUser extends BaseResourceEdit
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
