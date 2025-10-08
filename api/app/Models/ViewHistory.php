<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ViewHistory extends Model
{
    protected $table = 'view_history';

    public $timestamps = false;

    protected $fillable = [
        'artwork_id',
        'user_identifier',
        'viewed_at',
    ];

    protected $casts = [
        'viewed_at' => 'datetime',
    ];

    public function artwork()
    {
        return $this->belongsTo(Artwork::class);
    }

    public static function trackView(string $artworkId, string $userIdentifier)
    {
        return self::create([
            'artwork_id' => $artworkId,
            'user_identifier' => $userIdentifier,
            'viewed_at' => now(),
        ]);
    }

    public static function getUserHistory(string $userIdentifier, int $limit = 20)
    {
        return self::where('user_identifier', $userIdentifier)
            ->with('artwork')
            ->orderBy('viewed_at', 'desc')
            ->limit($limit)
            ->get();
    }
}
