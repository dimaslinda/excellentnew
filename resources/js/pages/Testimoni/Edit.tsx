import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, Link, usePage } from '@inertiajs/react';
import { FormEventHandler, useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Save, User, ArrowLeft, Edit3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface Testimoni {
    id: number;
    nama: string;
    lokasi: string;
    isi_testimoni: string;
    foto: string;
}

interface Props {
    testimoni: Testimoni;
}



export default function TestimoniEdit({ testimoni }: Props) {
    const { props } = usePage();
    const flash = (props as any).flash;
    const [previewImage, setPreviewImage] = useState<string | null>(testimoni.foto);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
            title: 'Testimoni',
            href: '/testimoni',
        },
        {
            title: 'Edit Testimoni',
            href: `/testimoni/${testimoni.id}/edit`,
        },
    ];
    
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: testimoni.nama,
        lokasi: testimoni.lokasi,
        isi_testimoni: testimoni.isi_testimoni,
        _method: 'PUT'
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
        post(`/testimoni/${testimoni.id}`, {
            onSuccess: () => {
                toast.success('Testimoni berhasil diperbarui!');
            },
            onError: () => {
                toast.error('Gagal memperbarui testimoni. Silakan coba lagi.');
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Testimoni - ${testimoni.nama}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header Section */}
                <div className="flex items-center gap-4">
                    <Link href="/testimoni">
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Kembali
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Testimoni</h1>
                        <p className="text-muted-foreground">
                            Perbarui testimoni dari {testimoni.nama}
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto w-full">
                    <Card className="shadow-2xl border overflow-hidden bg-card">
                        <CardHeader className="relative bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90 dark:from-amber-700/90 dark:to-orange-700/90"></div>
                            <div className="relative z-10 text-center">
                                <Edit3 className="w-8 h-8 mx-auto mb-2 text-yellow-300 dark:text-yellow-400" />
                                <CardTitle className="text-2xl font-bold text-white">Edit Testimoni</CardTitle>
                                <CardDescription className="text-amber-100 dark:text-amber-200 mt-2">
                                    Perbarui informasi testimoni Anda
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Upload Foto */}
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <Avatar 
                                            className="relative w-32 h-32 border-4 border-dashed border-muted-foreground/30 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            {previewImage ? (
                                                <AvatarImage src={previewImage} alt="Preview" className="object-cover" />
                                            ) : (
                                                <AvatarFallback className="bg-muted">
                                                    <User className="w-10 h-10 text-muted-foreground" />
                                                </AvatarFallback>
                                            )}
                                        </Avatar>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-background shadow-lg border-2 hover:bg-accent transition-colors"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Camera className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                        </Button>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    <div className="text-center">
                                        <Label className="text-sm font-medium text-foreground">Ganti Foto Profil</Label>
                                        <p className="text-xs text-muted-foreground mt-1">JPG, PNG, GIF hingga 2MB (opsional)</p>
                                    </div>
                                    {(errors as any).foto && <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{(errors as any).foto}</p>}
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
                                                "h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400",
                                                (errors as any).nama && "border-destructive focus:ring-destructive"
                                            )}
                                        />
                                        {(errors as any).nama && <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{(errors as any).nama}</p>}
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
                                                "h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400",
                                                (errors as any).lokasi && "border-destructive focus:ring-destructive"
                                            )}
                                        />
                                        {(errors as any).lokasi && <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{(errors as any).lokasi}</p>}
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
                                                "flex min-h-[150px] w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200",
                                                (errors as any).isi_testimoni && "border-destructive focus-visible:ring-destructive"
                                            )}
                                        />
                                        <div className="flex justify-between items-center">
                                            <p className="text-xs text-muted-foreground">Minimal 10 karakter</p>
                                            <p className="text-xs text-muted-foreground">{data.isi_testimoni.length} karakter</p>
                                        </div>
                                        {(errors as any).isi_testimoni && <p className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded">{(errors as any).isi_testimoni}</p>}
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <Link href="/testimoni" className="flex-1">
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
                                        className="flex-1 h-12 text-base bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-800 dark:hover:to-orange-800 text-white transition-all duration-200"
                                    >
                                        {processing ? (
                                            <>
                                                <Save className="w-5 h-5 mr-2 animate-spin" />
                                                Menyimpan...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-5 h-5 mr-2" />
                                                Simpan Perubahan
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