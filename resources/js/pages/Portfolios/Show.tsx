import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Edit } from 'lucide-react';

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

interface Props {
    portfolio: Portfolio;
}

export default function PortfolioShow({ portfolio }: Props) {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Portfolio', href: '/portfolios' },
        { label: portfolio.title, href: `/portfolios/${portfolio.id}` },
    ];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <AppLayout breadcrumbItems={breadcrumbItems}>
            <Head title={`Portfolio - ${portfolio.title}`} />

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
                    <div className="flex-1 space-y-1">
                        <h1 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-300">
                            {portfolio.title}
                        </h1>
                        <p className="text-base text-muted-foreground">Dibuat pada {formatDate(portfolio.created_at)}</p>
                    </div>
                    <Link href={`/portfolios/${portfolio.id}/edit`}>
                        <Button className="h-10 bg-gradient-to-r from-blue-600 to-blue-700 px-6 shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Portfolio
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Thumbnail Image */}
                        <Card className="overflow-hidden border-0 bg-white shadow-lg dark:bg-gray-800">
                            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 dark:border-gray-700 dark:from-blue-900/50 dark:to-indigo-900/50">
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Foto Thumbnail</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="group relative aspect-video overflow-hidden">
                                    <img
                                        src={`/storage/${portfolio.thumbnail_image}`}
                                        alt={portfolio.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Images */}
                        {(portfolio.image_1 || portfolio.image_2) && (
                            <Card className="overflow-hidden border-0 bg-white shadow-lg dark:bg-gray-800">
                                <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50 dark:border-gray-700 dark:from-green-900/50 dark:to-emerald-900/50">
                                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Foto Tambahan</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        {portfolio.image_1 && (
                                            <div className="group relative aspect-video overflow-hidden rounded-lg shadow-md">
                                                <img
                                                    src={`/storage/${portfolio.image_1}`}
                                                    alt={`${portfolio.title} - Foto 1`}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-300">
                                                    Foto 1
                                                </div>
                                            </div>
                                        )}
                                        {portfolio.image_2 && (
                                            <div className="group relative aspect-video overflow-hidden rounded-lg shadow-md">
                                                <img
                                                    src={`/storage/${portfolio.image_2}`}
                                                    alt={`${portfolio.title} - Foto 2`}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-300">
                                                    Foto 2
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Portfolio Info */}
                        <Card className="overflow-hidden border-0 bg-white shadow-lg dark:bg-gray-800">
                            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50 dark:border-gray-700 dark:from-purple-900/50 dark:to-pink-900/50">
                                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                                    Informasi Portfolio
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">{portfolio.title}</h3>
                                        {portfolio.description && (
                                            <div className="rounded-lg border-l-4 border-purple-500 bg-gray-50 p-4 dark:bg-gray-700">
                                                <p className="leading-relaxed whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                                                    {portfolio.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                                                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dibuat</span>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                                {formatDate(portfolio.created_at)}
                                            </span>
                                        </div>
                                        {portfolio.updated_at !== portfolio.created_at && (
                                            <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 dark:bg-green-950/30">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Terakhir Diperbarui</span>
                                                </div>
                                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                                    {formatDate(portfolio.updated_at)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Image Count */}
                        <Card className="overflow-hidden border-0 bg-white shadow-lg dark:bg-gray-900">
                            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-orange-50 to-red-50 dark:border-gray-800 dark:from-orange-950 dark:to-red-950">
                                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                                    Statistik Gambar
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 dark:bg-green-950/30">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                                                    <span className="text-xs font-bold text-white">✓</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Foto Thumbnail</span>
                                            </div>
                                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">Tersedia</span>
                                        </div>
                                        <div
                                            className={`flex items-center justify-between rounded-lg p-3 ${
                                                portfolio.image_1 ? 'bg-green-50 dark:bg-green-950/30' : 'bg-gray-50 dark:bg-gray-800'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                                        portfolio.image_1 ? 'bg-green-500' : 'bg-gray-400'
                                                    }`}
                                                >
                                                    <span className="text-xs font-bold text-white">{portfolio.image_1 ? '✓' : '✗'}</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Foto 1</span>
                                            </div>
                                            <span
                                                className={`text-sm font-semibold ${
                                                    portfolio.image_1 ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
                                                }`}
                                            >
                                                {portfolio.image_1 ? 'Tersedia' : 'Tidak Ada'}
                                            </span>
                                        </div>
                                        <div
                                            className={`flex items-center justify-between rounded-lg p-3 ${
                                                portfolio.image_2 ? 'bg-green-50 dark:bg-green-950/30' : 'bg-gray-50 dark:bg-gray-800'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                                        portfolio.image_2 ? 'bg-green-500' : 'bg-gray-400'
                                                    }`}
                                                >
                                                    <span className="text-xs font-bold text-white">{portfolio.image_2 ? '✓' : '✗'}</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Foto 2</span>
                                            </div>
                                            <span
                                                className={`text-sm font-semibold ${
                                                    portfolio.image_2 ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
                                                }`}
                                            >
                                                {portfolio.image_2 ? 'Tersedia' : 'Tidak Ada'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                                        <div className="flex items-center justify-between rounded-lg border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 p-4 dark:border-orange-800 dark:from-orange-950/30 dark:to-red-950/30">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Gambar</span>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">Termasuk thumbnail dan foto tambahan</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                                    {1 + (portfolio.image_1 ? 1 : 0) + (portfolio.image_2 ? 1 : 0)}
                                                </span>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">gambar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
