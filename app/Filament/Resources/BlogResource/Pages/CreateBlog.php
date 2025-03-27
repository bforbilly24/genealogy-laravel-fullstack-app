<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use App\Helpers\Class\BaseResourceCreate;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateBlog extends BaseResourceCreate
{
    protected static string $resource = BlogResource::class;
}
