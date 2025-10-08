<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Artwork extends Model
{
    protected $table = 'artworks';

    public $timestamps = false;

    protected $fillable = [
        'title_fr',
        'title_en',
        'title_wo',
        'description_fr',
        'description_en',
        'description_wo',
        'historical_context_fr',
        'historical_context_en',
        'historical_context_wo',
        'artist',
        'period',
        'origin',
        'materials',
        'image_url',
        'audio_url_fr',
        'audio_url_en',
        'audio_url_wo',
        'video_url',
        'qr_code',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public static function findByQrCode(string $qrCode)
    {
        return self::where('qr_code', strtoupper($qrCode))->first();
    }

    public static function getAllArtworks()
    {
        return self::orderBy('created_at', 'desc')->get();
    }

    public function getLocalizedTitle(string $locale = 'fr'): string
    {
        $field = "title_{$locale}";
        return $this->$field ?? $this->title_fr;
    }

    public function getLocalizedDescription(string $locale = 'fr'): string
    {
        $field = "description_{$locale}";
        return $this->$field ?? $this->description_fr;
    }

    public function getLocalizedContext(string $locale = 'fr'): string
    {
        $field = "historical_context_{$locale}";
        return $this->$field ?? $this->historical_context_fr;
    }

    public function getLocalizedAudioUrl(string $locale = 'fr'): ?string
    {
        $field = "audio_url_{$locale}";
        return $this->$field;
    }
}
