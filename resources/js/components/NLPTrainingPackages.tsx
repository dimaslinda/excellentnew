import React from 'react';

interface NLPTrainingPackagesProps {
    className?: string;
}

const NLPTrainingPackages: React.FC<NLPTrainingPackagesProps> = ({ className = '' }) => {
    return (
        <section className={`bg-white py-16 font-poppins ${className}`}>
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-cardhitam md:text-5xl">Paket Pelatihan NLP</h2>
                </div>

                {/* Package 1: Pelatihan untuk Korporasi */}
                <div className="mb-16">
                    <div className="flex w-full flex-col items-center justify-between gap-2 bg-headerbanner px-6 py-3 font-bold text-cardhitam md:flex-row">
                        <h3 className="text-2xl font-bold md:text-4xl">1. Pelatihan untuk Korporasi</h3>
                        <span className="text-lg opacity-90">2 Hari (Intensif)</span>
                    </div>
                    <div className="rounded-tr-lg rounded-b-lg bg-[#efefef] p-6 shadow-2xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Card 1 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Basic Communication Model</h4>
                                <p className="text-sm text-cardhitam">Memetakan pola pikir dan pola kerja individu dalam tim</p>
                            </div>

                            {/* Card 2 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Meta Model & Precision Questions</h4>
                                <p className="text-sm text-cardhitam">Menggali kebutuhan tim & mengurai masalah kompleks</p>
                            </div>

                            {/* Card 3 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Values & Belief System Change</h4>
                                <p className="text-sm text-cardhitam">Menanamkan belief kepemimpinan yang konstruktif</p>
                            </div>

                            {/* Card 4 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Representational System</h4>
                                <p className="text-sm text-cardhitam">Menyesuaikan gaya komunikasi dengan tipe dominan lawan bicara</p>
                            </div>

                            {/* Card 5 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Rapport & Mirroring</h4>
                                <p className="text-sm text-cardhitam">Membangun koneksi cepat dan efektif dalam komunikasi</p>
                            </div>

                            {/* Card 6 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Anchoring & State Management</h4>
                                <p className="text-sm text-cardhitam">Mengatur emosi diri dan menciptakan peak performance state</p>
                            </div>

                            {/* Card 7 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Sensory Acuity & Calibration</h4>
                                <p className="text-sm text-cardhitam">Membaca respon non-verbal lawan bicara</p>
                            </div>

                            {/* Card 8 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Goal Setting with NLP</h4>
                                <p className="text-sm text-cardhitam">Menyusun target berdasarkan sistem neurologis, bukan hanya logika</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Package 2: NLP Master for Leaders */}
                <div>
                    <div className="flex w-full flex-col items-center justify-between gap-2 bg-headerbanner px-6 py-3 font-bold text-cardhitam md:flex-row">
                        <h3 className="text-2xl font-bold md:text-4xl">2. NLP Master for Leaders</h3>
                        <span className="text-lg opacity-90">4 Hari ( Advance Level ) / 32 Jam Pelatihan</span>
                    </div>
                    <div className="rounded-tr-lg rounded-b-lg bg-[#efefef] p-6 shadow-2xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Card 1 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Meta Programs</h4>
                                <p className="text-sm text-cardhitam">
                                    Memahami bagaimana otak manusia memproses informasi & dampaknya pada perilaku
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Reframing & Perceptual Positions</h4>
                                <p className="text-sm text-cardhitam">Meningkatkan perspektif dalam pengambilan keputusan</p>
                            </div>

                            {/* Card 3 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Values & Belief System Change</h4>
                                <p className="text-sm text-cardhitam">Mengubah belief yang membatasi (limiting belief) menjadi empowering</p>
                            </div>

                            {/* Card 4 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Timeline Therapy (Lite)</h4>
                                <p className="text-sm text-cardhitam">Mengatasi hambatan masa lalu untuk pencapaian masa depan</p>
                            </div>

                            {/* Card 5 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Sleight of Mouth Patterns</h4>
                                <p className="text-sm text-cardhitam">Mengatasi keberatan, resistensi, dan konflik dalam komunikasi</p>
                            </div>

                            {/* Card 6 */}
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <h4 className="mb-2 font-bold text-cardhitam">Modeling Excellence</h4>
                                <p className="text-sm text-cardhitam">Menduplikasi keberhasilan menjadi sistem pelatihan internal tim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NLPTrainingPackages;
