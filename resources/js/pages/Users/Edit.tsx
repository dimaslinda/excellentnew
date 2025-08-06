import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Edit3, Eye, EyeOff, Mail, Save, User } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';
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

interface FlashMessages {
    success?: string;
    error?: string;
}

interface PageProps {
    flash?: FlashMessages;
    [key: string]: unknown;
}

export default function UserEdit({ user }: Props) {
    const { props } = usePage<PageProps>();
    const flash = props.flash;
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Users',
            href: '/users',
        },
        {
            title: 'Edit User',
            href: `/users/${user.id}/edit`,
        },
    ];

    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: '',
        password_confirmation: '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`, {
            onSuccess: () => {
                toast.success('User berhasil diperbarui!');
            },
            onError: () => {
                toast.error('Gagal memperbarui user. Silakan coba lagi.');
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit User - ${user.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header Section */}
                <div className="flex items-center gap-4">
                    <Link href="/users">
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit User</h1>
                        <p className="text-muted-foreground">
                            Perbarui informasi user {user.name}
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                                <div className="relative z-10 text-center">
                                    <Edit3 className="mx-auto mb-2 h-8 w-8 text-blue-300" />
                                    <CardTitle className="text-2xl font-bold text-white">Edit User</CardTitle>
                                    <CardDescription className="mt-2 text-blue-100">
                                        Perbarui informasi akun pengguna
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium">
                                            Nama Lengkap
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Masukkan nama lengkap"
                                                className={cn(
                                                    'pl-10 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500',
                                                    errors.name && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                                required
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="Masukkan alamat email"
                                                className={cn(
                                                    'pl-10 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500',
                                                    errors.email && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                                required
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium">
                                            Password Baru (Opsional)
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Kosongkan jika tidak ingin mengubah password"
                                                className={cn(
                                                    'pr-10 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500',
                                                    errors.password && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Password Confirmation Field */}
                                    {data.password && (
                                        <div className="space-y-2">
                                            <Label htmlFor="password_confirmation" className="text-sm font-medium">
                                                Konfirmasi Password Baru
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password_confirmation"
                                                    type={showPasswordConfirmation ? 'text' : 'password'}
                                                    value={data.password_confirmation}
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    placeholder="Konfirmasi password baru"
                                                    className={cn(
                                                        'pr-10 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500',
                                                        errors.password_confirmation && 'border-destructive focus-visible:ring-destructive'
                                                    )}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                    onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                                >
                                                    {showPasswordConfirmation ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            </div>
                                            {errors.password_confirmation && (
                                                <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{errors.password_confirmation}</p>
                                            )}
                                        </div>
                                    )}

                                    {/* Submit Buttons */}
                                    <div className="flex gap-4 pt-4">
                                        <Link href="/users" className="flex-1">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="w-full h-12 text-base"
                                                disabled={processing}
                                            >
                                                Batal
                                            </Button>
                                        </Link>
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="flex-1 h-12 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200"
                                        >
                                            {processing ? (
                                                <>
                                                    <Save className="mr-2 h-5 w-5 animate-spin" />
                                                    Menyimpan...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="mr-2 h-5 w-5" />
                                                    Simpan Perubahan
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* User Info Section */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Informasi User</CardTitle>
                                <CardDescription>
                                    Detail akun pengguna saat ini
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col items-center space-y-4">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                                        <AvatarFallback className="text-lg">
                                            {getInitials(user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-center">
                                        <h3 className="font-semibold">{user.name}</h3>
                                        <p className="text-sm text-muted-foreground">{user.email}</p>
                                        <div className="mt-2">
                                            {user.email_verified_at ? (
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                                    Terverifikasi
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                    Belum Terverifikasi
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Detail Akun</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">ID User:</span>
                                    <span className="font-medium">#{user.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Dibuat:</span>
                                    <span className="font-medium">{formatDate(user.created_at)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Diperbarui:</span>
                                    <span className="font-medium">{formatDate(user.updated_at)}</span>
                                </div>
                                {user.email_verified_at && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Verifikasi Email:</span>
                                        <span className="font-medium">{formatDate(user.email_verified_at)}</span>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Tips</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p>Kosongkan field password jika tidak ingin mengubah password</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p>Email harus unik dan valid</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p>Password baru minimal 8 karakter</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}