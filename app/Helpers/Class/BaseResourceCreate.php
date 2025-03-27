<?php

namespace App\Helpers\Class;

use Filament\Resources\Pages\CreateRecord;
use Filament\Notifications\Notification;

class BaseResourceCreate extends CreateRecord
{
    public static string $alertLabel = 'Data';

    public static function pageAdditionalActions($page): array
    {
        return [];
    }

    protected function getActions(): array
    {
        return [
            ...static::pageAdditionalActions($this),
            $this->getCreateFormAction()
                ->label('Save')
                ->formId('form'),
        ];
    }

    protected function getFormActions(): array
    {
        return [];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->title(static::$alertLabel . ' Berhasil Ditambahkan')
            ->color('success')
            ->success();
    }
}
