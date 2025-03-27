<?php

namespace App\Helpers\Class;

use Filament\Actions\Action;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Form;
use Filament\Resources\Resource;

use Filament\Tables\Actions;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

abstract class BaseResource extends Resource
{
    // Form Methods
    // ===============================================================

    abstract public static function formMainComponents(): array;

    public static function formSideComponents(): array
    {
        return [];
    }

    // Table Methods
    // ===============================================================

    abstract public static function tableMainColumns(): array;

    public static function tableAdditionalColumns(): array
    {
        return [];
    }

    public static function tableMainActions(): array
    {
        return [];
    }

    public static function tableAdditionalActions(): array
    {
        return [];
    }

    public static function tableMainFilters(): array
    {
        return [];
    }

    // Base Methods
    // ===============================================================

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                    ->schema([
                        Tabs::make('Tabs')
                            ->tabs([
                                Tabs\Tab::make('data')
                                    ->label('Data')
                                    ->icon('heroicon-m-pencil-square')
                                    ->schema([
                                        Grid::make([
                                            'default' => 1,
                                            'lg' => 2,
                                        ])
                                            ->schema(
                                                static::formMainComponents()
                                            )
                                    ]),
                            ]),
                    ])
                    ->columnSpan(2),
                Grid::make()
                    ->schema([
                        Section::make()
                            ->schema([
                                Placeholder::make('created_at')->content(
                                    fn($record): string =>
                                    $record && $record->created_at ? $record->created_at->diffForHumans() : '-'
                                ),
                                Placeholder::make('updated_at')->content(
                                    fn($record): string =>
                                    $record && $record->updated_at ? $record->updated_at->diffForHumans() : '-'
                                )
                            ])
                            ->columnSpan(2),
                        ...static::formSideComponents()
                    ])
                    ->columnSpan([
                        'default' => 2,
                        'lg' => 1,
                    ]),
            ])
            ->extraAttributes(['class' => 'form-wrapper'])
            ->columns([
                'sm' => 1,
                'lg' => 3,
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ...static::tableMainColumns(),
                ...[
                    TextColumn::make('created_at')->dateTime()->sortable(),
                    TextColumn::make('updated_at')->dateTime()->sortable(),
                ],
                ...static::tableAdditionalColumns(),
            ])
            ->defaultSort('created_at', 'desc')
            ->actions([
                ...static::tableMainActions(),
                Actions\ActionGroup::make([
                    ...static::tableAdditionalActions(),
                    Actions\ViewAction::make(),
                    Actions\EditAction::make(),
                ])->icon('heroicon-m-adjustments-vertical'),
            ])
            ->bulkActions(array_merge([
                Actions\DeleteBulkAction::make(),
            ], method_exists(static::class, 'tableMainBulkActions') ? static::tableMainBulkActions() : []))
            ->filters([
                ...static::tableMainFilters(),
            ]);
    }
}
