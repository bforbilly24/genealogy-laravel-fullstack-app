<?php

namespace App\Filament\Resources\ImageResource\Pages;

use App\Filament\Resources\ImageResource;
use Filament\Resources\Pages\CreateRecord;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class CreateImage extends CreateRecord
{
    protected static string $resource = ImageResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Image Created')
            ->body('The image has been successfully added to the gallery.');
    }

    protected function afterCreate(): void
    {
        Log::info('Image created: ' . $this->record->id);
    }
}