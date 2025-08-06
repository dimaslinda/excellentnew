<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolios = Portfolio::latest()->get();

        return Inertia::render('Portfolios/Index', [
            'portfolios' => $portfolios,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Portfolios/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'thumbnail_image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        $data = $request->only(['title', 'description']);

        // Handle thumbnail image upload
        if ($request->hasFile('thumbnail_image')) {
            $data['thumbnail_image'] = $request->file('thumbnail_image')->store('portfolios', 'public');
        }

        // Handle additional images upload
        if ($request->hasFile('image_1')) {
            $data['image_1'] = $request->file('image_1')->store('portfolios', 'public');
        }

        if ($request->hasFile('image_2')) {
            $data['image_2'] = $request->file('image_2')->store('portfolios', 'public');
        }

        Portfolio::create($data);

        return Redirect::route('portfolios.index')->with('success', 'Portfolio berhasil dibuat!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Portfolio $portfolio)
    {
        return Inertia::render('Portfolios/Show', [
            'portfolio' => $portfolio,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portfolio $portfolio)
    {
        return Inertia::render('Portfolios/Edit', [
            'portfolio' => $portfolio,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Portfolio $portfolio)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'thumbnail_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $data = $request->only(['title', 'description']);

        // Handle thumbnail image upload
        if ($request->hasFile('thumbnail_image')) {
            // Delete old image
            if ($portfolio->thumbnail_image) {
                Storage::disk('public')->delete($portfolio->thumbnail_image);
            }
            $data['thumbnail_image'] = $request->file('thumbnail_image')->store('portfolios', 'public');
        }

        // Handle additional images upload
        if ($request->hasFile('image_1')) {
            // Delete old image
            if ($portfolio->image_1) {
                Storage::disk('public')->delete($portfolio->image_1);
            }
            $data['image_1'] = $request->file('image_1')->store('portfolios', 'public');
        }

        if ($request->hasFile('image_2')) {
            // Delete old image
            if ($portfolio->image_2) {
                Storage::disk('public')->delete($portfolio->image_2);
            }
            $data['image_2'] = $request->file('image_2')->store('portfolios', 'public');
        }

        $portfolio->update($data);

        return Redirect::route('portfolios.index')->with('success', 'Portfolio berhasil diperbarui!');
    }

    /**
     * API endpoint to get latest portfolios for slider
     */
    public function apiIndex()
    {
        $portfolios = Portfolio::latest()
            ->take(3)
            ->get()
            ->map(function ($portfolio) {
                return [
                    'id' => $portfolio->id,
                    'title' => $portfolio->title,
                    'images' => array_filter([
                        $portfolio->thumbnail_image ? '/storage/' . $portfolio->thumbnail_image : null,
                        $portfolio->image_1 ? '/storage/' . $portfolio->image_1 : null,
                        $portfolio->image_2 ? '/storage/' . $portfolio->image_2 : null,
                    ]),
                    'description' => $portfolio->description,
                ];
            });

        return response()->json($portfolios);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portfolio $portfolio)
    {
        // Delete associated images
        if ($portfolio->thumbnail_image) {
            Storage::disk('public')->delete($portfolio->thumbnail_image);
        }
        if ($portfolio->image_1) {
            Storage::disk('public')->delete($portfolio->image_1);
        }
        if ($portfolio->image_2) {
            Storage::disk('public')->delete($portfolio->image_2);
        }

        $portfolio->delete();

        return Redirect::route('portfolios.index')->with('success', 'Portfolio berhasil dihapus!');
    }
}
