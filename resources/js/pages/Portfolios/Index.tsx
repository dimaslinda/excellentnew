import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, Plus, Trash2 } from 'lucide-react';
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

interface Props {
    portfolios: Portfolio[];
}

export default function PortfolioIndex({ portfolios }: Props) {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [portfolioToDelete, setPortfolioToDelete] = useState<Portfolio | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Portfolio', href: '/portfolios' },
    ];

    const handleDelete = (portfolio: Portfolio) => {
        setPortfolioToDelete(portfolio);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        if (!portfolioToDelete) return;

        setIsDeleting(true);
        try {
            router.delete(`/portfolios/${portfolioToDelete.id}`, {
                onSuccess: () => {
                    toast.success('Portfolio berhasil dihapus!');
                    setShowDeleteDialog(false);
                    setPortfolioToDelete(null);
                },
                onError: () => {
                    toast.error('Gagal menghapus portfolio');
                },
                onFinish: () => {
                    setIsDeleting(false);
                },
            });
        } catch (error) {
            console.error('Error deleting portfolio:', error);
            toast.error('Terjadi kesalahan saat menghapus portfolio');
            setIsDeleting(false);
        }
    };

    return (
        <AppLayout breadcrumbItems={breadcrumbItems}>
            <Head title="Portfolio" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
                        <p className="text-muted-foreground">Kelola portfolio perusahaan</p>
                    </div>
                    <Link href="/portfolios/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Portfolio
                        </Button>
                    </Link>
                </div>

                {portfolios.length === 0 ? (
                    <Card className="border-2 border-dashed bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                        <CardContent className="flex flex-col items-center justify-center py-16">
                            <div className="space-y-4 text-center">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                                    <Plus className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Belum ada portfolio</h3>
                                    <p className="max-w-md text-muted-foreground">
                                        Mulai dengan menambahkan portfolio pertama Anda untuk menampilkan karya dan proyek terbaik.
                                    </p>
                                </div>
                                <Link href="/portfolios/create">
                                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Tambah Portfolio Pertama
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {portfolios.map((portfolio, index) => (
                            <Card
                                key={portfolio.id}
                                className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: 'fadeInUp 0.6s ease-out forwards',
                                }}
                            >
                                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                                    <img
                                        src={`/storage/${portfolio.thumbnail_image}`}
                                        alt={portfolio.title}
                                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                                    <div className="absolute top-3 right-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        <div className="rounded-full bg-white/90 p-2 backdrop-blur-sm dark:bg-gray-900/90">
                                            <Eye className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader className="pb-3">
                                    <CardTitle className="line-clamp-1 text-lg font-semibold transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {portfolio.title}
                                    </CardTitle>
                                    {portfolio.description && (
                                        <CardDescription className="line-clamp-2 text-sm leading-relaxed">{portfolio.description}</CardDescription>
                                    )}
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Link href={`/portfolios/${portfolio.id}`} className="flex-1">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 dark:hover:border-blue-800 dark:hover:bg-blue-950"
                                            >
                                                <Eye className="mr-2 h-4 w-4" />
                                                Lihat
                                            </Button>
                                        </Link>
                                        <Link href={`/portfolios/${portfolio.id}/edit`}>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="transition-colors duration-200 hover:border-amber-200 hover:bg-amber-50 dark:hover:border-amber-800 dark:hover:bg-amber-950"
                                            >
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(portfolio)}
                                            className="text-red-600 transition-colors duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-700 dark:hover:border-red-800 dark:hover:bg-red-950"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="mt-3 border-t border-gray-100 pt-3 dark:border-gray-800">
                                        <p className="text-xs text-muted-foreground">
                                            Dibuat{' '}
                                            {new Date(portfolio.created_at).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Hapus Portfolio</AlertDialogTitle>
                        <AlertDialogDescription>
                            Apakah Anda yakin ingin menghapus portfolio "{portfolioToDelete?.title}"? Tindakan ini tidak dapat dibatalkan.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete} disabled={isDeleting} className="bg-red-600 hover:bg-red-700">
                            {isDeleting ? 'Menghapus...' : 'Hapus'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
