<?php

namespace App\Helpers\Class;

use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class BaseResourceEdit extends EditRecord
{
    public static string $alertLabel = 'Data';

    public static function pageAdditionalActions($page): array
    {
        return [];
    }

    protected function getActions(): array
    {
        $actions = static::pageAdditionalActions($this);

        return [
            $this->getSaveFormAction()
                ->label('Save')
                ->formId('form'),
            Actions\ActionGroup::make([
                ...$actions,
                Actions\DeleteAction::make()->color('danger'),
            ])->dropdown(false)
                ->icon('heroicon-m-adjustments-vertical')
                ->color('gray')
                ->button(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->title(static::$alertLabel . ' Berhasil Diperbarui')
            ->color('success')
            ->success();
    }
}
