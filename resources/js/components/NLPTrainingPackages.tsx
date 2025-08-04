import React from 'react';

interface TrainingCard {
    id: number;
    title: string;
    description: string;
}

interface TrainingPackage {
    id: number;
    title: string;
    duration: string;
    cards: TrainingCard[];
}

interface NLPTrainingPackagesProps {
    className?: string;
    sectionTitle?: string;
    packages?: TrainingPackage[];
}

const defaultPackages: TrainingPackage[] = [
    {
        id: 1,
        title: '1. Pelatihan untuk Korporasi',
        duration: '2 Hari (Intensif)',
        cards: [
            {
                id: 1,
                title: 'Basic Communication Model',
                description: 'Memetakan pola pikir dan pola kerja individu dalam tim',
            },
            {
                id: 2,
                title: 'Meta Model & Precision Questions',
                description: 'Menggali kebutuhan tim & mengurai masalah kompleks',
            },
            {
                id: 3,
                title: 'Values & Belief System Change',
                description: 'Menanamkan belief kepemimpinan yang konstruktif',
            },
            {
                id: 4,
                title: 'Representational System',
                description: 'Menyesuaikan gaya komunikasi dengan tipe dominan lawan bicara',
            },
            {
                id: 5,
                title: 'Rapport & Mirroring',
                description: 'Membangun koneksi cepat dan efektif dalam komunikasi',
            },
            {
                id: 6,
                title: 'Anchoring & State Management',
                description: 'Mengatur emosi diri dan menciptakan peak performance state',
            },
            {
                id: 7,
                title: 'Sensory Acuity & Calibration',
                description: 'Membaca respon non-verbal lawan bicara',
            },
            {
                id: 8,
                title: 'Goal Setting with NLP',
                description: 'Menyusun target berdasarkan sistem neurologis, bukan hanya logika',
            },
        ],
    },
    {
        id: 2,
        title: '2. NLP Master for Leaders',
        duration: '4 Hari ( Advance Level ) / 32 Jam Pelatihan',
        cards: [
            {
                id: 1,
                title: 'Meta Programs',
                description: 'Memahami bagaimana otak manusia memproses informasi & dampaknya pada perilaku',
            },
            {
                id: 2,
                title: 'Reframing & Perceptual Positions',
                description: 'Meningkatkan perspektif dalam pengambilan keputusan',
            },
            {
                id: 3,
                title: 'Values & Belief System Change',
                description: 'Mengubah belief yang membatasi (limiting belief) menjadi empowering',
            },
            {
                id: 4,
                title: 'Timeline Therapy (Lite)',
                description: 'Mengatasi hambatan masa lalu untuk pencapaian masa depan',
            },
            {
                id: 5,
                title: 'Sleight of Mouth Patterns',
                description: 'Mengatasi keberatan, resistensi, dan konflik dalam komunikasi',
            },
            {
                id: 6,
                title: 'Modeling Excellence',
                description: 'Menduplikasi keberhasilan menjadi sistem pelatihan internal tim',
            },
        ],
    },
];

const NLPTrainingPackages: React.FC<NLPTrainingPackagesProps> = ({
    className = '',
    sectionTitle = 'Paket Pelatihan NLP',
    packages = defaultPackages,
}) => {
    return (
        <section className={`bg-white py-16 font-poppins ${className}`}>
            <div className="container mx-auto flex flex-col items-center px-6 text-center">
                <div className="mb-12 max-w-5xl">
                    <h2 className="mb-4 text-4xl font-bold text-cardhitam md:text-5xl">{sectionTitle}</h2>
                </div>

                {packages.map((pkg, index) => (
                    <div key={pkg.id} className={index < packages.length - 1 ? 'mb-16' : ''}>
                        <div className="flex w-full flex-col items-center justify-between gap-2 bg-headerbanner px-6 py-3 font-bold text-cardhitam md:flex-row">
                            <h3 className="text-2xl font-bold md:text-4xl">{pkg.title}</h3>
                            <span className="text-lg opacity-90">{pkg.duration}</span>
                        </div>
                        <div className="rounded-tr-lg rounded-b-lg bg-[#efefef] p-6 shadow-2xl">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {pkg.cards.map((card) => (
                                    <div key={card.id} className="rounded-lg border bg-white p-6 shadow-md">
                                        <h4 className="mb-2 font-bold text-cardhitam">{card.title}</h4>
                                        <p className="text-sm text-cardhitam">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NLPTrainingPackages;
