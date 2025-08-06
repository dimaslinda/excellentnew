import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, Trash2, Upload } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface FormData {
    title: string;
    description: string;
    thumbnail_image: File | null;
    image_1: File | null;
    image_2: File | null;
}

export default function PortfolioCreate() {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        title: '',
        description: '',
        thumbnail_image: null,
        image_1: null,
        image_2: null,
    });

    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [image1Preview, setImage1Preview] = useState<string | null>(null);
    const [image2Preview, setImage2Preview] = useState<string | null>(null);

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Portfolio', href: '/portfolios' },
        { label: 'Tambah Portfolio', href: '/portfolios/create' },
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
        <div className="space-y-3">
            <Label htmlFor={field} className="text-sm font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <div className="space-y-4">
                {preview ? (
                    <div className="group relative">
                        <img
                            src={preview}
                            alt="Preview"
                            className="h-56 w-full rounded-lg border-2 border-gray-200 object-cover shadow-sm dark:border-gray-600"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <Button type="button" variant="destructive" size="sm" className="shadow-lg" onClick={() => handleFileChange(field, null)}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Gambar
                            </Button>
                        </div>
                        <div className="absolute top-3 left-3 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">✓ Terpilih</div>
                    </div>
                ) : (
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
                        <div
                            className={`rounded-lg border-2 border-dashed p-8 text-center transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 ${
                                errors[field] ? 'border-red-300 bg-red-50/50 dark:bg-red-950/20' : 'border-gray-300 dark:border-gray-600'
                            }`}
                        >
                            <div className="space-y-3">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                                    <Upload className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Klik untuk memilih {label.toLowerCase()}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG hingga 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {errors[field] && (
                <p className="flex items-center gap-1 text-sm text-red-600">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-xs dark:bg-red-900">!</span>
                    {errors[field]}
                </p>
            )}
        </div>
    );

    return (
        <AppLayout breadcrumbItems={breadcrumbItems}>
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

                            <div className="space-y-3">
                                <Label htmlFor="description" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Deskripsi
                                </Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Jelaskan portfolio Anda dengan detail yang menarik dan informatif..."
                                    rows={5}
                                    className={`resize-none text-base transition-all duration-200 ${
                                        errors.description
                                            ? 'border-red-300 bg-red-50/50 focus:border-red-400 dark:bg-red-950/20'
                                            : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 dark:border-gray-700'
                                    }`}
                                />
                                {errors.description && (
                                    <p className="flex items-center gap-1 text-sm text-red-600">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-xs dark:bg-red-900">
                                            !
                                        </span>
                                        {errors.description}
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
