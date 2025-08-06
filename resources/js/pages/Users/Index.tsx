import { DeleteConfirmModal } from '@/components/DeleteConfirmModal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Clock, Edit, Eye, Plus, Trash2, User, Users, UserCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
}

interface Props {
    users: {
        data: User[];
        links: any;
        meta: any;
    };
    stats: {
        total: number;
        verified: number;
        this_month: number;
    };
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

export default function UsersIndex({ users, stats }: Props) {
    const { props } = usePage<PageProps>();
    const flash = props.flash;
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const handleDelete = (user: User) => {
        setUserToDelete(user);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (!userToDelete) return;

        setIsDeleting(true);
        router.delete(`/users/${userToDelete.id}`, {
            onSuccess: () => {
                toast.success('User berhasil dihapus!');
                setDeleteModalOpen(false);
                setUserToDelete(null);
                setIsDeleting(false);
            },
            onError: () => {
                toast.error('Gagal menghapus user. Silakan coba lagi.');
                setIsDeleting(false);
            },
        });
    };

    const closeDeleteModal = () => {
        if (!isDeleting) {
            setDeleteModalOpen(false);
            setUserToDelete(null);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
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

    const usersData = users.data || [];
    const verifiedUsers = usersData.filter(user => user.email_verified_at !== null);
    const thisMonthUsers = usersData.filter((user) => {
        const userDate = new Date(user.created_at);
        const currentDate = new Date();
        return (
            userDate.getMonth() === currentDate.getMonth() &&
            userDate.getFullYear() === currentDate.getFullYear()
        );
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users - Daftar Pengguna" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
                        <p className="text-muted-foreground">Kelola pengguna sistem</p>
                    </div>
                    <Link href="/users/create">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Tambah User
                        </Button>
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats?.total || 0}</div>
                            <p className="text-xs text-muted-foreground">Pengguna terdaftar</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Verified Users</CardTitle>
                            <UserCheck className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats?.verified || 0}</div>
                            <p className="text-xs text-muted-foreground">Email terverifikasi</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Bulan Ini</CardTitle>
                            <Badge variant="secondary">Baru</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats?.this_month || 0}</div>
                            <p className="text-xs text-muted-foreground">User baru bulan ini</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Users List */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {usersData.map((user) => (
                        <Card key={user.id} className="group transition-all hover:shadow-md">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                                            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg">{user.name}</CardTitle>
                                            <CardDescription className="text-sm">{user.email}</CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Link href={`/users/${user.id}`}>
                                            <Button variant="ghost" size="sm">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href={`/users/${user.id}/edit`}>
                                            <Button variant="ghost" size="sm">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleDelete(user)}
                                            className="text-destructive hover:text-destructive"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        {formatDate(user.created_at)}
                                    </div>
                                    {user.email_verified_at ? (
                                        <Badge variant="default" className="text-xs">
                                            Verified
                                        </Badge>
                                    ) : (
                                        <Badge variant="secondary" className="text-xs">
                                            Unverified
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {usersData.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <User className="h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-4 text-lg font-semibold">Belum ada user</h3>
                            <p className="text-muted-foreground">Mulai dengan menambahkan user pertama.</p>
                            <Link href="/users/create" className="mt-4">
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Tambah User
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )}
            </div>

            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                onClose={closeDeleteModal}
                onConfirm={confirmDelete}
                title="Hapus User"
                description={`Apakah Anda yakin ingin menghapus user "${userToDelete?.name}"? Tindakan ini tidak dapat dibatalkan.`}
                isLoading={isDeleting}
            />
        </AppLayout>
    );
}