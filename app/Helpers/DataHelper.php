<?php

namespace App\Helpers;

use Carbon\Carbon;
use DateInterval;
use DatePeriod;

class DataHelper
{

    public static function cleanDateRange($dateRange, $format = 'Y-m-d', $days = 30, $interval = 'P1D')
    {
        $start = Carbon::today()->subDay($days - ($interval == 'P7D' ? 10 : 1))->toDateTime()->setTime(0, 0, 0);
        $end = Carbon::today()->addDay($interval == 'P7D' ? 7 : 0)->toDateTime()->setTime(23, 59, 59);
        $interval = new DateInterval($interval);

        $period = new DatePeriod($start, $interval, $end);

        $results = [];
        foreach ($period as $date) {
            $value = $results[$date->format($format)] ?? 0;
            $results[$date->format($format)] = $value + ($dateRange[$date->format($format)] ?? 0);
        }

        return $results;
    }

    public static function getCountByDays($modelClass, $format = 'Y-m-d', $days = 30)
    {
        // see https://laracasts.com/discuss/channels/laravel/select-count-by-day?page=1&replyId=678167
        $start = Carbon::today()->subDay($days - 1)->toDateTime()->setTime(0, 0, 0);

        $items = $modelClass::where('created_at', '>=', $start)->get();

        $itemsByDate = $items->countBy(fn($item) => Carbon::create($item['created_at'])->format($format));

        return $itemsByDate->all();
    }

    public static function cleanMonthRange($dateRange, $totalMonth, $format = 'F Y')
    {
        // see https://laracasts.com/discuss/channels/laravel/select-count-by-day?page=1&replyId=678167
        $range = [];
        $startDate = Carbon::today()->subMonth($totalMonth)->toDateTime()->setTime(0, 0, 0);

        $period = new DatePeriod(
            $startDate,
            new DateInterval('P1M'),
            Carbon::today()->toDateTime(),
        );

        foreach ($period as $date) {
            $range[$date->format($format)] = 0;
        }

        return array_replace($range, $dateRange);
    }

    public static function getCountByMonths($modelClass, $dateColumn, $totalMonth, $format = 'F Y')
    {
        // see https://laracasts.com/discuss/channels/laravel/select-count-by-day?page=1&replyId=678167
        $startDate = Carbon::today()->subMonth($totalMonth)->toDateTime()->setTime(0, 0, 0);

        return $modelClass::where($dateColumn, '>=', $startDate)
            ->get()
            ->countBy(function ($item) use ($dateColumn, $format) {
                return Carbon::create($item[$dateColumn])->format($format);
            }, true)
            ->all();
    }
}
