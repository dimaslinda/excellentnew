import React from 'react';

interface FasilitasItem {
    id: string;
    title: string;
    isHighlighted: boolean;
}

interface FasilitasPesertaProps {
    fasilitas?: FasilitasItem[];
}

const defaultFasilitas: FasilitasItem[] = [
    {
        id: '01',
        title: 'Sertifikat NNLP PRACTITIONER / MASTER (Approved by Neo NLP Society)',
        isHighlighted: false,
    },
    {
        id: '02',
        title: 'Modul Cetak & Digital',
        isHighlighted: true,
    },
    {
        id: '03',
        title: 'Worksheet Latihan NLP',
        isHighlighted: true,
    },
    {
        id: '04',
        title: 'Ruang pelatihan eksklusif (offline / Online via Zoom Premium)',
        isHighlighted: false,
    },
    {
        id: '05',
        title: 'Sesi Coaching Personal (1 on 1)',
        isHighlighted: false,
    },
    {
        id: '06',
        title: 'Rekaman video pelatihan (on request)',
        isHighlighted: true,
    },
    {
        id: '07',
        title: 'Konsultasi pasca-pelatihan 1x gratis (selama 30 hari)',
        isHighlighted: true,
    },
    {
        id: '08',
        title: 'Mentoring instaling program selama 40 hari penuh',
        isHighlighted: false,
    },
];

const FasilitasPeserta: React.FC<FasilitasPesertaProps> = ({ fasilitas = defaultFasilitas }) => {
    return (
        <section className="bg-white px-4 py-16 font-poppins">
            <div className="mx-auto max-w-6xl">
                {/* Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 lg:text-6xl">
                        <span className="bg-headerbanner text-cardhitam">Fasilitas</span> <span className="text-gray-800">Peserta</span>
                    </h2>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {fasilitas.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center rounded-lg border p-6 shadow-sm ${
                                item.isHighlighted
                                    ? 'border-headerbanner bg-headerbanner text-cardhitam'
                                    : 'border-[#efefef] bg-[#efefef] text-cardhitam'
                            }`}
                        >
                            <div className="mr-4 flex-shrink-0">
                                <span className={`text-4xl font-bold ${item.isHighlighted ? 'text-cardhitam' : 'text-cardhitam'}`}>{item.id}</span>
                            </div>
                            <div className="flex-1">
                                <p className={`text-sm leading-relaxed font-medium ${item.isHighlighted ? 'text-cardhitam' : 'text-cardhitam'}`}>
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FasilitasPeserta;
