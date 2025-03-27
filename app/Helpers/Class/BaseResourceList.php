<?php

namespace App\Helpers\Class;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class BaseResourceList extends ListRecords
{
    public static function pageAdditionalActions($page): array
    {
        return [];
    }

    protected function getActions(): array
    {
        return [
            ...static::pageAdditionalActions($this),
            Actions\CreateAction::make()->label('Create'),
        ];
    }
}
