import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface WhyExcellentSectionProps {
    title?: string;
    highlightText?: string;
    titleEnd?: string;
    features?: FeatureCardProps[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="rounded-tl-[65px] border border-gray-100 bg-[#fcfcfc] p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <div className="mb-4">{icon}</div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
    );
};

const WhyExcellentSection: React.FC<WhyExcellentSectionProps> = ({
    title = 'Mengapa',
    highlightText = 'Excellent',
    titleEnd = 'Team?',
    features = [
        {
            icon: (
                <div className="flex w-16 items-center justify-center bg-gray-100">
                    <img src="/img/general/icon1.png" alt="Icon 1" />
                </div>
            ),
            title: 'Metode Internasional, Adaptasi Lokal',
            description: 'Kami menggabungkan NLP, Neuro-Semantics, Talents Mapping, dan STIFiN dalam satu ekosistem pembelajaran',
        },
        {
            icon: (
                <div className="flex w-16 items-center justify-center bg-gray-100">
                    <img src="/img/general/icon2.png" alt="Icon 2" />
                </div>
            ),
            title: 'Pelatihan Bukan Sekedar Training',
            description: 'Setiap pelatihan kami rancang berdasarkan kebutuhan spesifik perusahaan.',
        },
        {
            icon: (
                <div className="flex w-16 items-center justify-center bg-gray-100">
                    <img src="/img/general/icon3.png" alt="Icon 3" />
                </div>
            ),
            title: 'Kustomisasi Berdasarkan Analisa Organisasi',
            description: 'Tim kami terdiri dari fasilitator bersertifikasi dan praktisi industri',
        },
    ],
}) => {
    return (
        <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col-reverse gap-8 lg:flex-row">
                    {/* Feature Cards */}
                    <div className="flex flex-1 flex-col gap-6 md:flex-row">
                        {features.map((feature, index) => (
                            <div key={index} className="flex-1">
                                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                            </div>
                        ))}
                    </div>

                    {/* Title Section */}
                    <div className="flex flex-col justify-center text-end lg:w-1/4 lg:min-w-[250px] xl:w-1/3">
                        <h2 className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl xl:text-7xl">
                            {title}
                            <br />
                            <span className="mt-2 inline-block rounded-lg bg-orange-400 px-3 py-1 text-white">{highlightText}</span>
                            {titleEnd}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyExcellentSection;
