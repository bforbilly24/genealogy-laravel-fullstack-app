<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Helpers\Class\BaseResource;
use App\Models\User;
use Filament\Resources\Pages\Page;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Group;
use Filament\Resources\Pages\CreateRecord;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class UserResource extends BaseResource
{
    protected static ?string $model = User::class;
    protected static ?string $modelLabel = 'Akun User';
    protected static ?string $pluralModelLabel = 'Akun User';

    protected static ?string $navigationIcon = 'heroicon-o-user';
    public static ?string $navigationGroup = 'Akun';
    protected static ?int $navigationSort = 1;


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'view' => Pages\ViewUser::route('/{record}'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
    public static function formMainComponents(): array
    {
        return [
            self::userDataSection(),
        ];
    }

    public static function tableMainColumns(): array
    {
        return [
            TextColumn::make('name')
                ->label('Nama Lengkap')
                ->searchable(),

            TextColumn::make('username')
                ->label('Username')
                ->searchable(),

            TextColumn::make('email')
                ->label('Email')
                ->searchable(),

            TextColumn::make('phone')
                ->label('Nomor Telepon')
                ->searchable(),

            TextColumn::make('roles.name')
                ->label('Role')
                ->searchable(),

            TextColumn::make('email_verified_at')
                ->dateTime()
                ->sortable(),
        ];
    }

    public static function userDataSection()
    {
        return Section::make('Data Pengguna')
            ->schema([
                Group::make()
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama Lengkap')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('username')
                            ->label('Username')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->maxLength(255),

                        TextInput::make('phone')
                            ->label('Nomor Telepon')
                            ->tel()
                            ->required()
                            ->maxLength(255),

                        TextInput::make('password')
                            ->label('Password')
                            ->password()
                            ->required(fn(Page $livewire) => $livewire instanceof CreateRecord)
                            ->dehydrated(fn($state) => filled($state))
                            ->dehydrateStateUsing(fn($state) => Hash::make($state)),
                    ])
                    ->columns(2)
                    ->columnSpanFull(),
            ])
            ->columns(1)
            ->columnSpanFull();
    }
}
