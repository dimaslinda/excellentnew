import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Camera, Sparkles, Upload, User } from 'lucide-react';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testimoni',
        href: '/testimoni',
    },
    {
        title: 'Tambah Testimoni',
        href: '/testimoni/create',
    },
];

export default function TestimoniCreate() {
    const { props } = usePage();
    const flash = (props as any).flash;
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        lokasi: '',
        isi_testimoni: '',
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            (setData as any)('foto', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/testimoni', {
            onSuccess: () => {
                toast.success('Testimoni berhasil ditambahkan!');
                reset();
                setPreviewImage(null);
            },
            onError: () => {
                toast.error('Gagal menambahkan testimoni. Silakan coba lagi.');
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Testimoni" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header Section */}
                <div className="flex items-center gap-4">
                    <Link href="/testimoni">
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Tambah Testimoni</h1>
                        <p className="text-muted-foreground">Tambahkan testimoni baru dari peserta program pelatihan</p>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-2xl">
                    <Card className="overflow-hidden border shadow-2xl bg-card">
                        <CardHeader className="relative bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 dark:from-blue-700/90 dark:to-indigo-700/90"></div>
                            <div className="relative z-10 text-center">
                                <Sparkles className="mx-auto mb-2 h-8 w-8 text-yellow-300 dark:text-yellow-400" />
                                <CardTitle className="text-2xl font-bold text-white">Bagikan Testimoni Anda</CardTitle>
                                <CardDescription className="mt-2 text-blue-100 dark:text-blue-200">
                                    Ceritakan pengalaman Anda dengan program pelatihan kami
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Upload Foto */}
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="group relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-40"></div>
                                        <Avatar 
                                            className="relative h-32 w-32 border-4 border-dashed border-muted-foreground/30 transition-all duration-300 group-hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            {previewImage ? (
                                                <AvatarImage src={previewImage} alt="Preview" className="object-cover" />
                                            ) : (
                                                <AvatarFallback className="bg-muted">
                                                    <User className="h-12 w-12 text-muted-foreground" />
                                                </AvatarFallback>
                                            )}
                                        </Avatar>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="absolute -right-2 -bottom-2 h-10 w-10 rounded-full border-2 bg-background p-0 shadow-lg transition-colors hover:bg-accent"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Camera className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </Button>
                                    </div>
                                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                    <div className="text-center">
                                        <Label className="text-sm font-medium text-foreground">Upload Foto Profil</Label>
                                        <p className="mt-1 text-xs text-muted-foreground">JPG, PNG, GIF hingga 2MB</p>
                                    </div>
                                    {(errors as any).foto && (
                                        <p className="rounded bg-destructive/10 px-3 py-1 text-sm text-destructive">{(errors as any).foto}</p>
                                    )}
                                </div>

                                {/* Form Fields */}
                                <div className="grid gap-6">
                                    {/* Nama */}
                                    <div className="space-y-3">
                                        <Label htmlFor="nama" className="text-sm font-semibold text-foreground">
                                            Nama Lengkap *
                                        </Label>
                                        <Input
                                            id="nama"
                                            type="text"
                                            value={data.nama}
                                            onChange={(e) => setData('nama', e.target.value)}
                                            placeholder="Masukkan nama lengkap Anda"
                                            className={cn(
                                                'h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400',
                                                (errors as any).nama && 'border-destructive focus:ring-destructive',
                                            )}
                                        />
                                        {(errors as any).nama && (
                                            <p className="rounded bg-destructive/10 px-3 py-1 text-sm text-destructive">{(errors as any).nama}</p>
                                        )}
                                    </div>

                                    {/* Lokasi */}
                                    <div className="space-y-3">
                                        <Label htmlFor="lokasi" className="text-sm font-semibold text-foreground">
                                            Lokasi *
                                        </Label>
                                        <Input
                                            id="lokasi"
                                            type="text"
                                            value={data.lokasi}
                                            onChange={(e) => setData('lokasi', e.target.value)}
                                            placeholder="Contoh: Jakarta, DKI Jakarta"
                                            className={cn(
                                                'h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400',
                                                (errors as any).lokasi && 'border-destructive focus:ring-destructive',
                                            )}
                                        />
                                        {(errors as any).lokasi && (
                                            <p className="rounded bg-destructive/10 px-3 py-1 text-sm text-destructive">{(errors as any).lokasi}</p>
                                        )}
                                    </div>

                                    {/* Isi Testimoni */}
                                    <div className="space-y-3">
                                        <Label htmlFor="isi_testimoni" className="text-sm font-semibold text-foreground">
                                            Testimoni *
                                        </Label>
                                        <textarea
                                            id="isi_testimoni"
                                            value={data.isi_testimoni}
                                            onChange={(e) => setData('isi_testimoni', e.target.value)}
                                            placeholder="Ceritakan pengalaman Anda dengan program pelatihan kami. Bagaimana program ini membantu pengembangan karir dan keterampilan Anda?"
                                            rows={6}
                                            className={cn(
                                                'flex min-h-[150px] w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                                                (errors as any).isi_testimoni && 'border-destructive focus-visible:ring-destructive',
                                            )}
                                        />
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs text-muted-foreground">Minimal 10 karakter</p>
                                            <p className="text-xs text-muted-foreground">{data.isi_testimoni.length} karakter</p>
                                        </div>
                                        {(errors as any).isi_testimoni && (
                                            <p className="rounded bg-destructive/10 px-3 py-1 text-sm text-destructive">{(errors as any).isi_testimoni}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <Link href="/testimoni" className="flex-1">
                                        <Button type="button" variant="outline" className="h-12 w-full text-base" disabled={processing}>
                                            Batal
                                        </Button>
                                    </Link>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="h-12 flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-base text-white transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-800 dark:hover:to-indigo-800"
                                    >
                                        {processing ? (
                                            <>
                                                <Upload className="mr-2 h-5 w-5 animate-spin" />
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="mr-2 h-5 w-5" />
                                                Kirim Testimoni
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
