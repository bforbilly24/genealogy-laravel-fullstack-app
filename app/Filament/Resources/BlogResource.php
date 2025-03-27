<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\RelationManagers;
use App\Helpers\Class\BaseResource;
use App\Models\Blog;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;


class BlogResource extends BaseResource
{
    protected static ?string $model = Blog::class;
    protected static ?string $modelLabel = 'Daftar Blog';
    protected static ?string $pluralModelLabel = 'Daftar Blog';

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    public static ?string $navigationGroup = 'Master Data';
    protected static ?int $navigationSort = 2;


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'view' => Pages\ViewBlog::route('/{record}'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }

    // Form components
    public static function formMainComponents(): array
    {
        return [
            self::departementBlogSection(),
        ];
    }

    // Table columns
    public static function tableMainColumns(): array
    {
        return [
            TextColumn::make('name')
                ->label('Nama Blog')
                ->sortable()
                ->searchable()
                ->toggleable(),

            TextColumn::make('author')
                ->label('Penulis')
                ->sortable()
                ->toggleable(),

            TextColumn::make('created_at')
                ->label('Dibuat Pada')
                ->dateTime()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),

            TextColumn::make('updated_at')
                ->label('Diperbarui Pada')
                ->dateTime()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),

            TextColumn::make('image')
                ->label('Gambar')
                ->formatStateUsing(function ($state) {
                    return $state ? '<img src="' . asset('storage/' . $state) . '" width="50" height="50">' : 'No image';
                })
                ->html()
                ->toggleable(),
        ];
    }

    // ===========================================================
    // Section: Detail Blog
    // ===========================================================
    public static function departementBlogSection()
    {
        return Section::make('Detail Blog')
            ->schema([
                Group::make()
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama Blog')
                            ->required()
                            ->maxLength(255),
                        RichEditor::make('description')
                            ->label('Deskripsi Blog')
                            ->required(),
                        TextInput::make('author')
                            ->label('Penulis')
                            ->required()
                            ->maxLength(255),
                        FileUpload::make('image')
                            ->label('Gambar Blog')
                            ->image()
                            ->required(),
                    ])
                    ->columns(1)
                    ->columnSpanFull(),
            ])
            ->columns(1)
            ->columnSpanFull();
    }
}
