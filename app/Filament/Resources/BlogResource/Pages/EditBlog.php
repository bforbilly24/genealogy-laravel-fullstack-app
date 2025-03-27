<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use App\Helpers\Class\BaseResourceEdit;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBlog extends BaseResourceEdit
{
    protected static string $resource = BlogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
