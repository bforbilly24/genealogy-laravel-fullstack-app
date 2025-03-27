<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FamilyMemberResource\Pages;
use App\Filament\Resources\FamilyMemberResource\RelationManagers;
use App\Helpers\Class\BaseResource;
use App\Models\FamilyMember;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Pages\Page;
use Filament\Resources\Pages\CreateRecord;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Hash;

class FamilyMemberResource extends BaseResource
{
    protected static ?string $model = FamilyMember::class;
    protected static ?string $modelLabel = 'Anggota Keluarga';
    protected static ?string $pluralModelLabel = 'Anggota Keluarga';

    protected static ?string $navigationIcon = 'heroicon-o-user';
    public static ?string $navigationGroup = 'Family';
    protected static ?int $navigationSort = 1;


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFamilyMembers::route('/'),
            'create' => Pages\CreateFamilyMember::route('/create'),
            'view' => Pages\ViewFamilyMemberResource::route('/{record}'),
            'edit' => Pages\EditFamilyMember::route('/{record}/edit'),
        ];
    }
    public static function formMainComponents(): array
    {
        return [
            self::familyMemberSection(),
        ];
    }

    public static function tableMainColumns(): array
    {
        return [
            TextColumn::make('name')
                ->label('Nama Lengkap')
                ->searchable(),

            TextColumn::make('spouse')
                ->label('Pasangan')
                ->searchable(),

            TextColumn::make('address')
                ->label('Alamat')
                ->searchable(),

            TextColumn::make('birth_place')
                ->label('Tempat Lahir')
                ->searchable(),

            TextColumn::make('gender')
                ->label('Jenis Kelamin')
                ->searchable(),

            TextColumn::make('birth_date')
                ->label('Tanggal Lahir')
                ->sortable(),

            TextColumn::make('generation')
                ->label('Generasi')
                ->searchable(),

            TextColumn::make('label')
                ->label('Label')
                ->searchable(),

            TextColumn::make('parent.name')
                ->label('Orang Tua')
                ->searchable()
                ->sortable(),
        ];
    }

    public static function familyMemberSection()
    {
        return Section::make('Data Anggota Keluarga')
            ->schema([
                Group::make()
                    ->schema([
                        Select::make('parent_id')
                            ->relationship('parent', 'name')
                            ->label('Orang Tua')
                            ->preload()
                            ->reactive()
                            ->afterStateUpdated(function(Set $set, $state) {
                                $parent = FamilyMember::find($state);
                                $set('generation', optional($parent)?->generation + 1);
                            })
                            ->searchable(),

                        TextInput::make('name')
                            ->label('Nama Lengkap')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('spouse')
                            ->label('Pasangan')
                            ->maxLength(255),

                        Textarea::make('address')
                            ->label('Alamat')
                            ->maxLength(255),

                        TextInput::make('birth_place')
                            ->label('Tempat Lahir')
                            ->maxLength(255),

                        Select::make('gender')
                            ->label('Jenis Kelamin')
                            ->options([
                                'L' => 'Laki-laki',
                                'P' => 'Perempuan',
                            ])
                            ->required(),

                        DatePicker::make('birth_date')
                            ->label('Tanggal Lahir')
                            ->required(),

                        TextInput::make('generation')
                            ->label('Generasi')
                            ->required()
                            ->numeric()
                            ->maxLength(255),

                        TextInput::make('label')
                            ->label('Label')
                            ->hint('Label seperti Kakek, Nenek, Ayah, dkk')
                            ->maxLength(255),

                            ])
                    ->columns(2)
                    ->columnSpanFull(),
            ])
            ->columns(1)
            ->columnSpanFull();
    }
}
