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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, Clock, Edit, Mail, Shield, Trash2, User } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    user: User;
}

export default function UserShow({ user }: Props) {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Users',
            href: '/users',
        },
        {
            title: user.name,
            href: `/users/${user.id}`,
        },
    ];

    const handleDelete = () => {
        setIsDeleting(true);
        router.delete(`/users/${user.id}`, {
            onSuccess: () => {
                toast.success('User berhasil dihapus!');
                router.visit('/users');
            },
            onError: () => {
                toast.error('Gagal menghapus user. Silakan coba lagi.');
                setIsDeleting(false);
            },
            onFinish: () => {
                setShowDeleteDialog(false);
                setIsDeleting(false);
            },
        });
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getRelativeTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return 'Baru saja';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit yang lalu`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam yang lalu`;
        if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} hari yang lalu`;
        if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} bulan yang lalu`;
        return `${Math.floor(diffInSeconds / 31536000)} tahun yang lalu`;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`User - ${user.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/users">
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Detail User</h1>
                            <p className="text-muted-foreground">Informasi lengkap user {user.name}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/users/${user.id}/edit`}>
                            <Button variant="outline">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Hapus
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Main Info Section */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Profile Card */}
                        <Card>
                            <CardHeader className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16 border-4 border-white/20">
                                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                                            <AvatarFallback className="bg-white/20 text-xl text-white">{getInitials(user.name)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-2xl font-bold text-white">{user.name}</CardTitle>
                                            <CardDescription className="flex items-center gap-2 text-blue-100">
                                                <Mail className="h-4 w-4" />
                                                {user.email}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Shield className="h-4 w-4" />
                                            Status Verifikasi
                                        </div>
                                        <div>
                                            {user.email_verified_at ? (
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                                    ✓ Email Terverifikasi
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                                                    ⚠ Belum Terverifikasi
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <User className="h-4 w-4" />
                                            ID User
                                        </div>
                                        <div className="font-mono text-sm font-medium">#{user.id}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Activity Timeline */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5" />
                                    Timeline Aktivitas
                                </CardTitle>
                                <CardDescription>Riwayat aktivitas akun pengguna</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                            <Calendar className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">Akun diperbarui</p>
                                            <p className="text-sm text-muted-foreground">
                                                {formatDate(user.updated_at)} • {getRelativeTime(user.updated_at)}
                                            </p>
                                        </div>
                                    </div>
                                    {user.email_verified_at && (
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                                <Shield className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Email diverifikasi</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {formatDate(user.email_verified_at)} • {getRelativeTime(user.email_verified_at)}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                                            <User className="h-4 w-4 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">Akun dibuat</p>
                                            <p className="text-sm text-muted-foreground">
                                                {formatDate(user.created_at)} • {getRelativeTime(user.created_at)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Aksi Cepat</CardTitle>
                                <CardDescription>Tindakan yang dapat dilakukan</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Link href={`/users/${user.id}/edit`} className="block">
                                    <Button variant="outline" className="w-full justify-start">
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit Informasi
                                    </Button>
                                </Link>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                    onClick={async () => {
                                        try {
                                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                                await navigator.clipboard.writeText(user.email);
                                                toast.success('Email berhasil disalin!');
                                            } else {
                                                // Fallback untuk browser yang tidak mendukung Clipboard API
                                                const textArea = document.createElement('textarea');
                                                textArea.value = user.email;
                                                document.body.appendChild(textArea);
                                                textArea.select();
                                                document.execCommand('copy');
                                                document.body.removeChild(textArea);
                                                toast.success('Email berhasil disalin!');
                                            }
                                        } catch (error) {
                                            console.error('Gagal menyalin email:', error);
                                            toast.error('Gagal menyalin email');
                                        }
                                    }}
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Salin Email
                                </Button>
                                <Button variant="destructive" className="w-full justify-start" onClick={() => setShowDeleteDialog(true)}>
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Hapus User
                                </Button>
                            </CardContent>
                        </Card>

                        {/* User Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Statistik</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Status Akun:</span>
                                    <span className="text-sm font-medium">{user.email_verified_at ? 'Aktif' : 'Pending'}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Bergabung:</span>
                                    <span className="text-sm font-medium">{getRelativeTime(user.created_at)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Terakhir Update:</span>
                                    <span className="text-sm font-medium">{getRelativeTime(user.updated_at)}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Hapus User</AlertDialogTitle>
                        <AlertDialogDescription>
                            Apakah Anda yakin ingin menghapus user <strong>{user.name}</strong>? Tindakan ini tidak dapat dibatalkan dan akan
                            menghapus semua data yang terkait dengan user ini.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>Batal</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            {isDeleting ? (
                                <>
                                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                    Menghapus...
                                </>
                            ) : (
                                'Hapus User'
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
