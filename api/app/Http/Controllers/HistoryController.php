<?php

namespace App\Http\Controllers;

use App\Models\ViewHistory;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function getUserHistory(Request $request)
    {
        $request->validate([
            'user_identifier' => 'required|string',
            'limit' => 'nullable|integer|min:1|max:100',
        ]);

        try {
            $limit = $request->limit ?? 20;
            $history = ViewHistory::getUserHistory(
                $request->user_identifier,
                $limit
            );

            return response()->json([
                'success' => true,
                'data' => $history,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching history',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function trackView(Request $request)
    {
        $request->validate([
            'artwork_id' => 'required|uuid',
            'user_identifier' => 'nullable|string',
        ]);

        try {
            $userIdentifier = $request->user_identifier ?? $request->ip();

            ViewHistory::trackView(
                $request->artwork_id,
                $userIdentifier
            );

            return response()->json([
                'success' => true,
                'message' => 'View tracked successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error tracking view',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
