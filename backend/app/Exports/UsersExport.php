<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class UsersExport implements FromQuery, WithHeadings, WithMapping
{
    use Exportable;

    public function query()
    {
        return User::query();
    }

    public function headings(): array
    {
        return [
            '#',
            'Firstname',
            'Middlename',
            'Lastname',
            'Phone number',
            'Email',
            'Points',
            'Created',
            'Updated',
        ];
    }

    
    public function map($user): array
    {
        return [
            $user->id,
            $user->firstname,
            $user->middlename,
            $user->lastname,
            $user->phone_number,
            $user->email,
            // Date::dateTimeToExcel($user->created_at),
        ];
    }
}
