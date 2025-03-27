<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Helpers\Class\BaseResourceList;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUsers extends BaseResourceList
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
