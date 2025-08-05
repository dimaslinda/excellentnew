<?php

namespace App\Http\Controllers;

use App\Models\Testimoni;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimoniController extends Controller
{
    /**
     * Get testimoni data for API (public access)
     */
    public function apiIndex()
    {
        $testimonis = Testimoni::latest()->get()->map(function ($testimoni) {
            // Check if foto is a URL (starts with http) or a local file path
            $imageUrl = $testimoni->foto;
            if ($testimoni->foto && !str_starts_with($testimoni->foto, 'http')) {
                // If it's a local file, use Storage::url()
                $imageUrl = Storage::url($testimoni->foto);
            } elseif (!$testimoni->foto) {
                // If no foto, use default image
                $imageUrl = '/img/general/testimoni.png';
            }
            // If it's already a URL (starts with http), use it as is
            
            return [
                'id' => $testimoni->id,
                'name' => $testimoni->nama,
                'position' => $testimoni->lokasi,
                'description' => $testimoni->isi_testimoni,
                'image' => $imageUrl,
                'created_at' => $testimoni->created_at
            ];
        });

        return response()->json($testimonis);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonis = Testimoni::latest()->get()->map(function ($testimoni) {
            // Check if foto is a URL (starts with http) or a local file path
            $imageUrl = $testimoni->foto;
            if ($imageUrl && !str_starts_with($imageUrl, 'http')) {
                // It's a local file path, use Storage::url()
                $imageUrl = Storage::url($imageUrl);
            } elseif (!$imageUrl) {
                // No image, use default
                $imageUrl = '/img/general/testimoni.png';
            }
            // If it starts with 'http', use it as is (external URL)
            
            return [
                'id' => $testimoni->id,
                'nama' => $testimoni->nama,
                'lokasi' => $testimoni->lokasi,
                'isi_testimoni' => $testimoni->isi_testimoni,
                'foto' => $imageUrl,
                'created_at' => $testimoni->created_at,
            ];
        });

        return Inertia::render('Testimoni/Index', [
            'testimonis' => $testimonis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Testimoni/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'isi_testimoni' => 'required|string|min:10',
            'foto' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $data = $request->only(['nama', 'lokasi', 'isi_testimoni']);
        
        if ($request->hasFile('foto')) {
            $data['foto'] = $request->file('foto')->store('testimoni', 'public');
        }

        Testimoni::create($data);
        
        return redirect()->route('testimoni.index')
            ->with('success', 'Testimoni berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        
        // Process image URL
        $imageUrl = $testimoni->foto;
        if ($imageUrl && !str_starts_with($imageUrl, 'http')) {
            $imageUrl = Storage::url($imageUrl);
        } elseif (!$imageUrl) {
            $imageUrl = '/img/general/testimoni.png';
        }
        
        $testimoniData = [
            'id' => $testimoni->id,
            'nama' => $testimoni->nama,
            'lokasi' => $testimoni->lokasi,
            'isi_testimoni' => $testimoni->isi_testimoni,
            'foto' => $imageUrl,
            'created_at' => $testimoni->created_at,
        ];
        
        return Inertia::render('Testimoni/Show', [
            'testimoni' => $testimoniData
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        
        // Process image URL
        $imageUrl = $testimoni->foto;
        if ($imageUrl && !str_starts_with($imageUrl, 'http')) {
            $imageUrl = Storage::url($imageUrl);
        } elseif (!$imageUrl) {
            $imageUrl = '/img/general/testimoni.png';
        }
        
        $testimoniData = [
            'id' => $testimoni->id,
            'nama' => $testimoni->nama,
            'lokasi' => $testimoni->lokasi,
            'isi_testimoni' => $testimoni->isi_testimoni,
            'foto' => $imageUrl,
            'created_at' => $testimoni->created_at,
        ];

        return Inertia::render('Testimoni/Edit', [
            'testimoni' => $testimoniData
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        
        $request->validate([
            'nama' => 'required|string|max:255',
            'lokasi' => 'required|string|max:255',
            'isi_testimoni' => 'required|string|min:10',
            'foto' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $data = $request->only(['nama', 'lokasi', 'isi_testimoni']);
        
        if ($request->hasFile('foto')) {
            // Hapus foto lama jika ada
            if ($testimoni->foto && Storage::disk('public')->exists($testimoni->foto)) {
                Storage::disk('public')->delete($testimoni->foto);
            }
            $data['foto'] = $request->file('foto')->store('testimoni', 'public');
        }

        $testimoni->update($data);
        
        return redirect()->route('testimoni.index')
            ->with('success', 'Testimoni berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        
        // Hapus foto jika ada
        if ($testimoni->foto && Storage::disk('public')->exists($testimoni->foto)) {
            Storage::disk('public')->delete($testimoni->foto);
        }
        
        $testimoni->delete();
        
        return redirect()->route('testimoni.index')
            ->with('success', 'Testimoni berhasil dihapus!');
    }
}