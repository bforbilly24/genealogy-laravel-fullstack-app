<?php

namespace App\Helpers\Class;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class BaseResourceView extends ViewRecord
{
    public static function pageAdditionalActions($page): array
    {
        return [];
    }

    protected function getActions(): array
    {
        $actions = static::pageAdditionalActions($this);

        return [
            Actions\EditAction::make()->label('Edit'),
            Actions\ActionGroup::make([
                ...$actions,
                Actions\DeleteAction::make()->color('danger'),
            ])->dropdown(false)
                ->icon('heroicon-m-adjustments-vertical')
                ->color('gray')
                ->button(),
        ];
    }
}
