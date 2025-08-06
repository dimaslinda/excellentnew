import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, Trash2, Upload } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PortfolioCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        thumbnail_image: null as File | null,
        image_1: null as File | null,
        image_2: null as File | null,
    });

    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [image1Preview, setImage1Preview] = useState<string | null>(null);
    const [image2Preview, setImage2Preview] = useState<string | null>(null);

    const breadcrumbItems: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Portfolio', href: '/portfolios' },
        { title: 'Tambah Portfolio', href: '/portfolios/create' },
    ];

    const handleFileChange = (field: 'thumbnail_image' | 'image_1' | 'image_2', file: File | null) => {
        setData(field, file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                if (field === 'thumbnail_image') setThumbnailPreview(result);
                else if (field === 'image_1') setImage1Preview(result);
                else if (field === 'image_2') setImage2Preview(result);
            };
            reader.readAsDataURL(file);
        } else {
            if (field === 'thumbnail_image') setThumbnailPreview(null);
            else if (field === 'image_1') setImage1Preview(null);
            else if (field === 'image_2') setImage2Preview(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/portfolios', {
            onSuccess: () => {
                toast.success('Portfolio berhasil ditambahkan!');
                router.visit('/portfolios');
            },
            onError: () => {
                toast.error('Gagal menambahkan portfolio');
            },
        });
    };

    const FileUploadField = ({
        label,
        field,
        preview,
        required = false,
    }: {
        label: string;
        field: 'thumbnail_image' | 'image_1' | 'image_2';
        preview: string | null;
        required?: boolean;
    }) => (
        <div className="space-y-4">
            <Label htmlFor={field} className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            
            {/* Upload Area */}
            <div className="relative">
                <input
                    id={field}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        handleFileChange(field, file);
                    }}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                />
                <div className={`group relative overflow-hidden rounded-xl border-2 border-dashed transition-all duration-300 ${
                    errors[field]
                        ? 'border-red-400 bg-red-50/50 dark:border-red-500 dark:bg-red-950/20'
                        : 'border-gray-300 bg-gradient-to-br from-blue-50/50 to-purple-50/50 hover:border-blue-400 hover:from-blue-100/70 hover:to-purple-100/70 dark:border-gray-600 dark:from-blue-950/30 dark:to-purple-950/30 dark:hover:border-blue-500'
                }`}>
                    <div className="flex min-h-[120px] flex-col items-center justify-center p-6 text-center">
                        <div className="mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 shadow-lg">
                            <Upload className="h-6 w-6 text-white" />
                        </div>
                        <p className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Klik atau seret gambar ke sini
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Format: JPG, PNG, GIF • Maksimal 2MB
                        </p>
                        {preview && (
                            <div className="mt-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                                    ✓ File terpilih
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Preview Section */}
            {preview && (
                <div className="group relative">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <p className="text-sm font-semibold text-green-600 dark:text-green-400">Preview Gambar</p>
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="h-8 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/20"
                            onClick={() => handleFileChange(field, null)}
                        >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Hapus
                        </Button>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={preview}
                            alt="Preview"
                            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                </div>
            )}

            {/* Error Message */}
            {errors[field] && (
                <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20">
                    <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errors[field]}</span>
                </div>
            )}
        </div>
    );

    return (
        <AppLayout breadcrumbs={breadcrumbItems}>
            <Head title="Tambah Portfolio" />

            <div className="space-y-6 p-6">
                <div className="flex items-center gap-6">
                    <Link href="/portfolios">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-10 px-4 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Button>
                    </Link>
                    <div className="space-y-1">
                        <h1 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-300">
                            Tambah Portfolio
                        </h1>
                        <p className="text-base text-muted-foreground">Tambahkan portfolio baru untuk menampilkan karya terbaik Anda</p>
                    </div>
                </div>

                <Card className="border-0 bg-white shadow-lg dark:bg-gray-800">
                    <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 dark:border-gray-700 dark:from-blue-900/50 dark:to-indigo-900/50">
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Informasi Portfolio</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">
                            Lengkapi informasi portfolio yang akan ditambahkan dengan detail yang menarik
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <Label htmlFor="title" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Judul Portfolio <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Masukkan judul portfolio yang menarik"
                                    className={`h-12 text-base transition-all duration-200 ${
                                        errors.title
                                            ? 'border-red-300 bg-red-50/50 focus:border-red-400 dark:bg-red-950/20'
                                            : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 dark:border-gray-700'
                                    }`}
                                />
                                {errors.title && (
                                    <p className="flex items-center gap-1 text-sm text-red-600">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-xs dark:bg-red-900">
                                            !
                                        </span>
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <FileUploadField label="Foto Thumbnail" field="thumbnail_image" preview={thumbnailPreview} required />

                            <FileUploadField label="Foto 1" field="image_1" preview={image1Preview} />

                            <FileUploadField label="Foto 2" field="image_2" preview={image2Preview} />

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 dark:border-gray-800">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="h-12 bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-base font-medium shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
                                >
                                    {processing ? (
                                        <>
                                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                                            Menyimpan...
                                        </>
                                    ) : (
                                        'Simpan Portfolio'
                                    )}
                                </Button>
                                <Link href="/portfolios">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="h-12 border-gray-300 px-8 text-base transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
                                    >
                                        Batal
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
