import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Eye, EyeOff, Mail, Sparkles, User, UserPlus } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface FlashMessages {
    success?: string;
    error?: string;
}

interface PageProps {
    flash?: FlashMessages;
}

interface UserErrors {
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
    {
        title: 'Tambah User',
        href: '/users/create',
    },
];

export default function UserCreate() {
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

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/users', {
            onSuccess: () => {
                toast.success('User berhasil ditambahkan!');
                reset();
            },
            onError: () => {
                toast.error('Gagal menambahkan user. Silakan coba lagi.');
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah User" />
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
                        <h1 className="text-3xl font-bold tracking-tight">Tambah User</h1>
                        <p className="text-muted-foreground">Buat akun pengguna baru untuk sistem</p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <UserPlus className="h-5 w-5" />
                                    Informasi User
                                </CardTitle>
                                <CardDescription>
                                    Masukkan informasi lengkap untuk membuat akun pengguna baru
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
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
                                                    'pl-10',
                                                    errors.name && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                                required
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-sm text-destructive">{errors.name}</p>
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
                                                    'pl-10',
                                                    errors.email && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                                required
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-sm text-destructive">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium">
                                            Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Masukkan password"
                                                className={cn(
                                                    'pr-10',
                                                    errors.password && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                                required
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
                                            <p className="text-sm text-destructive">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Password Confirmation Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation" className="text-sm font-medium">
                                            Konfirmasi Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password_confirmation"
                                                type={showPasswordConfirmation ? 'text' : 'password'}
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                placeholder="Konfirmasi password"
                                                className={cn(
                                                    'pr-10',
                                                    errors.password_confirmation && 'border-destructive focus-visible:ring-destructive'
                                                )}
                                                required
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
                                            <p className="text-sm text-destructive">{errors.password_confirmation}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex gap-4 pt-4">
                                        <Button type="submit" disabled={processing} className="flex-1">
                                            {processing ? (
                                                <>
                                                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                    Menyimpan...
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles className="mr-2 h-4 w-4" />
                                                    Simpan User
                                                </>
                                            )}
                                        </Button>
                                        <Link href="/users">
                                            <Button type="button" variant="outline" disabled={processing}>
                                                Batal
                                            </Button>
                                        </Link>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Preview Section */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Preview User</CardTitle>
                                <CardDescription>
                                    Pratinjau bagaimana user akan tampil
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col items-center space-y-4">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${data.name || 'User'}`} />
                                        <AvatarFallback className="text-lg">
                                            {data.name ? getInitials(data.name) : 'U'}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-center">
                                        <h3 className="font-semibold">
                                            {data.name || 'Nama User'}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {data.email || 'email@example.com'}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Tips</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p>Gunakan email yang valid untuk verifikasi akun</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p>Password minimal 8 karakter dengan kombinasi huruf dan angka</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <p>User akan menerima email untuk verifikasi akun</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}