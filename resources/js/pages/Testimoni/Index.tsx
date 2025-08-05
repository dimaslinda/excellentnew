import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Clock, Edit, Eye, MessageSquare, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testimoni',
        href: '/testimoni',
    },
];

interface Testimoni {
    id: number;
    nama: string;
    lokasi: string;
    isi_testimoni: string;
    foto: string;
    created_at: string;
}

interface Props {
    testimonis: Testimoni[];
    flash?: {
        success?: string;
        error?: string;
    };
}

interface FlashMessages {
    success?: string;
    error?: string;
}

interface PageProps {
    flash?: FlashMessages;
}

export default function TestimoniIndex({ testimonis }: Props) {
    const { props } = usePage<PageProps>();
    const flash = props.flash;
    const [selectedTestimoni, setSelectedTestimoni] = useState<Testimoni | null>(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [testimoniToDelete, setTestimoniToDelete] = useState<Testimoni | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const handleDelete = (testimoni: Testimoni) => {
        setTestimoniToDelete(testimoni);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (!testimoniToDelete) return;

        setIsDeleting(true);
        router.delete(`/testimoni/${testimoniToDelete.id}`, {
            onSuccess: () => {
                toast.success('Testimoni berhasil dihapus!');
                setDeleteModalOpen(false);
                setTestimoniToDelete(null);
                setIsDeleting(false);
            },
            onError: () => {
                toast.error('Gagal menghapus testimoni. Silakan coba lagi.');
                setIsDeleting(false);
            },
        });
    };

    const closeDeleteModal = () => {
        if (!isDeleting) {
            setDeleteModalOpen(false);
            setTestimoniToDelete(null);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const truncateText = (text: string, maxLength: number = 100) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Testimoni - Daftar Testimoni" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Testimoni</h1>
                        <p className="text-muted-foreground">Kelola testimoni dari peserta program pelatihan</p>
                    </div>
                    <Link href="/testimoni/create">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Tambah Testimoni
                        </Button>
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Testimoni</CardTitle>
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{testimonis.length}</div>
                            <p className="text-xs text-muted-foreground">Testimoni terdaftar</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Bulan Ini</CardTitle>
                            <Badge variant="secondary">Baru</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {
                                    testimonis.filter((testimoni) => {
                                        const testimoniDate = new Date(testimoni.created_at);
                                        const currentDate = new Date();
                                        return (
                                            testimoniDate.getMonth() === currentDate.getMonth() &&
                                            testimoniDate.getFullYear() === currentDate.getFullYear()
                                        );
                                    }).length
                                }
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {(() => {
                                    const thisMonthCount = testimonis.filter((testimoni) => {
                                        const testimoniDate = new Date(testimoni.created_at);
                                        const currentDate = new Date();
                                        return (
                                            testimoniDate.getMonth() === currentDate.getMonth() &&
                                            testimoniDate.getFullYear() === currentDate.getFullYear()
                                        );
                                    }).length;
                                    if (thisMonthCount === 0) return 'Belum ada testimoni';
                                    if (thisMonthCount === 1) return '1 testimoni baru';
                                    return `${thisMonthCount} testimoni baru`;
                                })()}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Testimoni Terbaru</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {testimonis.length > 0
                                    ? (() => {
                                          const sortedTestimonis = [...testimonis].sort(
                                              (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
                                          );
                                          const latestTestimoni = sortedTestimonis[0];
                                          const testimoniDate = new Date(latestTestimoni.created_at);
                                          const currentDate = new Date();
                                          
                                          // Reset time to start of day for accurate day calculation
                                          const testimoniDay = new Date(testimoniDate.getFullYear(), testimoniDate.getMonth(), testimoniDate.getDate());
                                          const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                                          
                                          const daysDiff = Math.floor((currentDay.getTime() - testimoniDay.getTime()) / (1000 * 60 * 60 * 24));
                                          return daysDiff;
                                      })()
                                    : 0}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {testimonis.length > 0
                                    ? (() => {
                                          const sortedTestimonis = [...testimonis].sort(
                                              (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
                                          );
                                          const latestTestimoni = sortedTestimonis[0];
                                          const testimoniDate = new Date(latestTestimoni.created_at);
                                          const currentDate = new Date();
                                          
                                          // Reset time to start of day for accurate day calculation
                                          const testimoniDay = new Date(testimoniDate.getFullYear(), testimoniDate.getMonth(), testimoniDate.getDate());
                                          const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                                          
                                          const daysDiff = Math.floor((currentDay.getTime() - testimoniDay.getTime()) / (1000 * 60 * 60 * 24));
                                          if (daysDiff === 0) return 'Hari ini';
                                          if (daysDiff === 1) return '1 hari yang lalu';
                                          return `${daysDiff} hari yang lalu`;
                                      })()
                                    : 'Belum ada testimoni'}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Testimoni Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonis.map((testimoni) => (
                        <Card
                            key={testimoni.id}
                            className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-gray-900 dark:to-gray-800/50"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={testimoni.foto} alt={testimoni.nama} />
                                        <AvatarFallback>
                                            {testimoni.nama
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="min-w-0 flex-1">
                                        <CardTitle className="truncate text-lg font-semibold">{testimoni.nama}</CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground">{testimoni.lokasi}</CardDescription>
                                        <Badge variant="outline" className="mt-1 text-xs">
                                            {formatDate(testimoni.created_at)}
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <blockquote className="relative mb-4 text-sm leading-relaxed text-gray-700 italic dark:text-gray-300">
                                    <span className="absolute -top-2 -left-1 font-serif text-4xl text-blue-200 dark:text-blue-800">"</span>
                                    <span className="relative z-10">{truncateText(testimoni.isi_testimoni, 120)}</span>
                                    <span className="absolute -right-1 -bottom-4 font-serif text-4xl text-blue-200 dark:text-blue-800">"</span>
                                </blockquote>

                                <div className="flex translate-y-2 transform gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 cursor-pointer"
                                        onClick={() => setSelectedTestimoni(testimoni)}
                                    >
                                        <Eye className="mr-1 h-3 w-3" />
                                        Lihat
                                    </Button>
                                    <Link href={`/testimoni/${testimoni.id}/edit`}>
                                        <Button variant="outline" size="sm" className="cursor-pointer">
                                            <Edit className="h-3 w-3" />
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDelete(testimoni)}
                                        className="cursor-pointer text-destructive hover:border-destructive/50 hover:text-destructive/80"
                                    >
                                        <Trash2 className="h-3 w-3" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {testimonis.length === 0 && (
                    <Card className="py-12 text-center">
                        <CardContent>
                            <MessageSquare className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                            <CardTitle className="mb-2">Belum ada testimoni</CardTitle>
                            <CardDescription className="mb-4">Mulai kumpulkan testimoni dari peserta program pelatihan Anda</CardDescription>
                            <Link href="/testimoni/create">
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Tambah Testimoni Pertama
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )}

                {/* Detail Modal */}
                {selectedTestimoni && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <Card className="max-h-[80vh] w-full max-w-2xl overflow-y-auto">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={selectedTestimoni.foto} alt={selectedTestimoni.nama} />
                                        <AvatarFallback>
                                            {selectedTestimoni.nama
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl">{selectedTestimoni.nama}</CardTitle>
                                        <CardDescription>{selectedTestimoni.lokasi}</CardDescription>
                                        <Badge variant="outline" className="mt-2">
                                            {formatDate(selectedTestimoni.created_at)}
                                        </Badge>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => setSelectedTestimoni(null)}>
                                        ✕
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <blockquote className="text-base leading-relaxed text-gray-700 italic">
                                    "{selectedTestimoni.isi_testimoni}"
                                </blockquote>
                                <div className="mt-6 flex gap-2">
                                    <Link href={`/testimoni/${selectedTestimoni.id}/edit`}>
                                        <Button variant="outline">
                                            <Edit className="mr-2 h-4 w-4" />
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outline"
                                        onClick={() => handleDelete(selectedTestimoni)}
                                        className="text-red-600 hover:text-red-700"
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Hapus
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>

            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                onClose={closeDeleteModal}
                onConfirm={confirmDelete}
                itemName={testimoniToDelete?.nama}
                isLoading={isDeleting}
            />
        </AppLayout>
    );
}
