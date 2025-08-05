<?php

namespace Database\Seeders;

use App\Models\Testimoni;
use Illuminate\Database\Console\Commands\Seed;
use Illuminate\Database\Seeder;

class TestimoniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonis = [
            [
                'nama' => 'Ibu Yuniar',
                'lokasi' => 'Korwil Perluk Kota Tangerang',
                'isi_testimoni' => 'Sebagai seorang Pengawas SD, saya sangat senang melihat dampak positif dari pelatihan IHT Assemen Diagnostik terutama AI dan penilaian diagnosis pada guru guru kami. Pelatihan ini tidak hanya memberikan mereka pengetahuan tentang teknologi terbaru, tetapi juga membuka pikiran mereka terhadap berbagai aplikasi yang dapat bermanfaat dalam pekerjaan sehari hari terutama mempermudah dalam pembuatan soal dan mencari materi ajar.',
                'foto' => '/img/general/testimoni.png'
            ],
            [
                'nama' => 'Bapak Ahmad',
                'lokasi' => 'Kepala Dinas Pendidikan',
                'isi_testimoni' => 'Sebagai seorang Pengawas SD, saya sangat senang melihat dampak positif dari pelatihan IHT Assemen Diagnostik terutama AI dan penilaian diagnosis pada guru guru kami. Pelatihan ini tidak hanya memberikan mereka pengetahuan tentang teknologi terbaru, tetapi juga membuka pikiran mereka terhadap berbagai aplikasi yang dapat bermanfaat dalam pekerjaan sehari hari terutama mempermudah dalam pembuatan soal dan mencari materi ajar.',
                'foto' => '/img/general/testimoni.png'
            ],
            [
                'nama' => 'Ibu Sari',
                'lokasi' => 'Manager IT Bank ABC',
                'isi_testimoni' => 'Sebagai seorang Pengawas SD, saya sangat senang melihat dampak positif dari pelatihan IHT Assemen Diagnostik terutama AI dan penilaian diagnosis pada guru guru kami. Pelatihan ini tidak hanya memberikan mereka pengetahuan tentang teknologi terbaru, tetapi juga membuka pikiran mereka terhadap berbagai aplikasi yang dapat bermanfaat dalam pekerjaan sehari hari terutama mempermudah dalam pembuatan soal dan mencari materi ajar.',
                'foto' => '/img/general/testimoni.png'
            ],
            [
                'nama' => 'Bapak Rudi',
                'lokasi' => 'Direktur PT. Maju Jaya',
                'isi_testimoni' => 'Sebagai seorang Pengawas SD, saya sangat senang melihat dampak positif dari pelatihan IHT Assemen Diagnostik terutama AI dan penilaian diagnosis pada guru guru kami. Pelatihan ini tidak hanya memberikan mereka pengetahuan tentang teknologi terbaru, tetapi juga membuka pikiran mereka terhadap berbagai aplikasi yang dapat bermanfaat dalam pekerjaan sehari hari terutama mempermudah dalam pembuatan soal dan mencari materi ajar.',
                'foto' => '/img/general/testimoni.png'
            ],
            [
                'nama' => 'Ibu Maya',
                'lokasi' => 'Kepala Bagian Keuangan',
                'isi_testimoni' => 'Sebagai seorang Pengawas SD, saya sangat senang melihat dampak positif dari pelatihan IHT Assemen Diagnostik terutama AI dan penilaian diagnosis pada guru guru kami. Pelatihan ini tidak hanya memberikan mereka pengetahuan tentang teknologi terbaru, tetapi juga membuka pikiran mereka terhadap berbagai aplikasi yang dapat bermanfaat dalam pekerjaan sehari hari terutama mempermudah dalam pembuatan soal dan mencari materi ajar.',
                'foto' => '/img/general/testimoni.png'
            ],
            [
                'nama' => 'Bapak Andi',
                'lokasi' => 'CEO Startup Tech',
                'isi_testimoni' => 'Sebagai seorang Pengawas SD, saya sangat senang melihat dampak positif dari pelatihan IHT Assemen Diagnostik terutama AI dan penilaian diagnosis pada guru guru kami. Pelatihan ini tidak hanya memberikan mereka pengetahuan tentang teknologi terbaru, tetapi juga membuka pikiran mereka terhadap berbagai aplikasi yang dapat bermanfaat dalam pekerjaan sehari hari terutama mempermudah dalam pembuatan soal dan mencari materi ajar.',
                'foto' => '/img/general/testimoni.png'
            ]
        ];

        foreach ($testimonis as $testimoni) {
            Testimoni::create($testimoni);
        }
    }
}
