<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Helpers\Class\BaseResourceView;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewUser extends BaseResourceView
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
