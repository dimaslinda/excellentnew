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

interface Portfolio {
    id: number;
    title: string;
    description: string | null;
    thumbnail_image: string;
    image_1: string | null;
    image_2: string | null;
    created_at: string;
    updated_at: string;
}

interface FormData {
    title: string;
    description: string;
    thumbnail_image: File | null;
    image_1: File | null;
    image_2: File | null;
    _method: string;
}

interface Props {
    portfolio: Portfolio;
}

export default function PortfolioEdit({ portfolio }: Props) {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        title: portfolio.title,
        description: portfolio.description || '',
        thumbnail_image: null,
        image_1: null,
        image_2: null,
        _method: 'PUT',
    });

    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [image1Preview, setImage1Preview] = useState<string | null>(null);
    const [image2Preview, setImage2Preview] = useState<string | null>(null);

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Portfolio', href: '/portfolios' },
        { label: portfolio.title, href: `/portfolios/${portfolio.id}` },
        { label: 'Edit', href: `/portfolios/${portfolio.id}/edit` },
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

        post(`/portfolios/${portfolio.id}`, {
            onSuccess: () => {
                toast.success('Portfolio berhasil diperbarui!');
                router.visit(`/portfolios/${portfolio.id}`);
            },
            onError: () => {
                toast.error('Gagal memperbarui portfolio');
            },
        });
    };

    const FileUploadField = ({
        label,
        field,
        preview,
        currentImage,
        required = false,
    }: {
        label: string;
        field: 'thumbnail_image' | 'image_1' | 'image_2';
        preview: string | null;
        currentImage: string | null;
        required?: boolean;
    }) => (
        <div className="space-y-3">
            <Label htmlFor={field} className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <div className="space-y-4">
                <div className="relative">
                    <Input
                        id={field}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            handleFileChange(field, file);
                        }}
                        className={`border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 ${
                            errors[field]
                                ? 'border-red-500 bg-red-50 focus:border-red-500 dark:bg-red-950/20'
                                : 'border-gray-200 bg-white focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800'
                        }`}
                    />
                    {preview && (
                        <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                                ✓ Terpilih
                            </span>
                        </div>
                    )}
                </div>

                {/* Show new preview if file is selected */}
                {preview && (
                    <div className="group relative">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <p className="text-sm font-semibold text-green-600 dark:text-green-400">Gambar Baru</p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={preview}
                                alt="Preview Baru"
                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-3 right-3 shadow-lg transition-all duration-200 hover:shadow-xl"
                                onClick={() => handleFileChange(field, null)}
                            >
                                <Trash2 className="h-4 w-4" />
                                Hapus Gambar
                            </Button>
                        </div>
                    </div>
                )}

                {/* Show current image if no new file is selected */}
                {!preview && currentImage && (
                    <div className="group relative">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Gambar Saat Ini</p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={`/storage/${currentImage}`}
                                alt="Gambar Saat Ini"
                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    </div>
                )}

                {/* Show upload placeholder if no preview and no current image */}
                {!preview && !currentImage && (
                    <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <Upload className="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-500" />
                        <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Pilih gambar untuk {label.toLowerCase()}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Format: JPG, PNG, GIF (Max: 2MB)</p>
                    </div>
                )}
            </div>
            {errors[field] && (
                <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors[field]}
                </div>
            )}
        </div>
    );

    return (
        <AppLayout breadcrumbItems={breadcrumbItems}>
            <Head title={`Edit Portfolio - ${portfolio.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="flex items-center gap-4">
                    <Link href={`/portfolios/${portfolio.id}`}>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300 shadow-md transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Button>
                    </Link>
                    <div>
                        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                            Edit Portfolio
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">Perbarui informasi portfolio "{portfolio.title}"</p>
                    </div>
                </div>

                <Card className="overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white dark:bg-gray-800">
                    <CardHeader className="border-b border-sidebar-border/70 bg-gradient-to-r from-blue-50 to-purple-50 dark:border-sidebar-border dark:from-blue-900/50 dark:to-purple-900/50">
                        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            Informasi Portfolio
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">Perbarui informasi portfolio yang diperlukan</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-3">
                                <Label htmlFor="title" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Judul Portfolio <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Masukkan judul portfolio"
                                    className={`border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 ${
                                        errors.title
                                            ? 'border-red-500 bg-red-50 focus:border-red-500 dark:bg-red-950/20'
                                            : 'border-gray-200 bg-white focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800'
                                    }`}
                                />
                                {errors.title && (
                                    <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {errors.title}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="description" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Deskripsi
                                </Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Masukkan deskripsi portfolio (opsional)"
                                    rows={4}
                                    className={`resize-none border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 ${
                                        errors.description
                                            ? 'border-red-500 bg-red-50 focus:border-red-500 dark:bg-red-950/20'
                                            : 'border-gray-200 bg-white focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800'
                                    }`}
                                />
                                {errors.description && (
                                    <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {errors.description}
                                    </div>
                                )}
                            </div>

                            <FileUploadField
                                label="Foto Thumbnail"
                                field="thumbnail_image"
                                preview={thumbnailPreview}
                                currentImage={portfolio.thumbnail_image}
                                required
                            />

                            <FileUploadField label="Foto 1" field="image_1" preview={image1Preview} currentImage={portfolio.image_1} />

                            <FileUploadField label="Foto 2" field="image_2" preview={image2Preview} currentImage={portfolio.image_2} />

                            <div className="flex items-center gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {processing ? (
                                        <>
                                            <svg
                                                className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Menyimpan...
                                        </>
                                    ) : (
                                        'Perbarui Portfolio'
                                    )}
                                </Button>
                                <Link href={`/portfolios/${portfolio.id}`}>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-gray-300 shadow-md transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg dark:hover:bg-gray-800"
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
