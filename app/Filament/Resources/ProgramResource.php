<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProgramResource\Pages;
use App\Filament\Resources\ProgramResource\RelationManagers;
use App\Helpers\Class\BaseResource;
use App\Models\Program;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Columns\TextColumn;


class ProgramResource extends BaseResource
{
    protected static ?string $model = Program::class;
    protected static ?string $modelLabel = 'Daftar Program';
    protected static ?string $pluralModelLabel = 'Daftar Program';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    public static ?string $navigationGroup = 'Master Data';
    protected static ?int $navigationSort = 2;

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPrograms::route('/'),
            'create' => Pages\CreateProgram::route('/create'),
            'view' => Pages\ViewProgram::route('/{record}'),
            'edit' => Pages\EditProgram::route('/{record}/edit'),
        ];
    }

    // Form components
    public static function formMainComponents(): array
    {
        return [
            self::programDetailsSection(),
        ];
    }

    // Table columns
    public static function tableMainColumns(): array
    {
        return [
            TextColumn::make('name')
                ->label('Nama Program')
                ->sortable()
                ->searchable()
                ->toggleable(),

            TextColumn::make('date')
                ->label('Tanggal Program')
                ->dateTime()
                ->sortable()
                ->toggleable(),

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
    // Section: Detail Program
    // ===========================================================
    public static function programDetailsSection()
    {
        return Section::make('Detail Program')
            ->schema([
                Group::make()
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama Program')
                            ->required()
                            ->maxLength(255),

                        Textarea::make('description')
                            ->label('Deskripsi Program')
                            ->required(),

                        DatePicker::make('date')
                            ->label('Tanggal Program')
                            ->required(),

                        FileUpload::make('image')
                            ->label('Gambar Program')
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
