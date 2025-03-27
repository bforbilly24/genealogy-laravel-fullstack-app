<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use App\Helpers\Class\BaseResourceList;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBlogs extends BaseResourceList
{
    protected static string $resource = BlogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
