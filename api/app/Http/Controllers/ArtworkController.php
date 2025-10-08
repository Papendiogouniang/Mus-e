<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use App\Models\ViewHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArtworkController extends Controller
{
    public function index()
    {
        try {
            $artworks = Artwork::getAllArtworks();

            return response()->json([
                'success' => true,
                'data' => $artworks,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching artworks',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $artwork = Artwork::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $artwork,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Artwork not found',
            ], 404);
        }
    }

    public function scanQrCode(Request $request)
    {
        $request->validate([
            'qr_code' => 'required|string',
            'user_identifier' => 'nullable|string',
        ]);

        try {
            $artwork = Artwork::findByQrCode($request->qr_code);

            if (!$artwork) {
                return response()->json([
                    'success' => false,
                    'message' => 'QR code not found',
                ], 404);
            }

            $userIdentifier = $request->user_identifier ?? $request->ip();
            ViewHistory::trackView($artwork->id, $userIdentifier);

            return response()->json([
                'success' => true,
                'data' => $artwork,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error scanning QR code',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getLocalized($id, $locale = 'fr')
    {
        try {
            $artwork = Artwork::findOrFail($id);

            $localized = [
                'id' => $artwork->id,
                'title' => $artwork->getLocalizedTitle($locale),
                'description' => $artwork->getLocalizedDescription($locale),
                'historical_context' => $artwork->getLocalizedContext($locale),
                'audio_url' => $artwork->getLocalizedAudioUrl($locale),
                'video_url' => $artwork->video_url,
                'image_url' => $artwork->image_url,
                'artist' => $artwork->artist,
                'period' => $artwork->period,
                'origin' => $artwork->origin,
                'materials' => $artwork->materials,
                'qr_code' => $artwork->qr_code,
            ];

            return response()->json([
                'success' => true,
                'data' => $localized,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Artwork not found',
            ], 404);
        }
    }
}
