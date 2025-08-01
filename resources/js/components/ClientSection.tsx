import React from 'react';

interface ClientSectionProps {
    title?: string;
    clients?: {
        id: number;
        name: string;
        logo: string;
        alt: string;
    }[];
}

const ClientSection: React.FC<ClientSectionProps> = ({
    title = 'Klien Kami',
    clients = [
        {
            id: 1,
            name: 'MEMPAWAH',
            logo: '/img/logo/mempawah.webp',
            alt: 'MEMPAWAH Logo',
        },
        {
            id: 2,
            name: 'DIKBU',
            logo: '/img/logo/dikbud.webp',
            alt: 'Dikbud Logo',
        },
        {
            id: 3,
            name: 'DINDIKBU',
            logo: '/img/logo/dindikbud.webp',
            alt: 'Dindikbud Logo',
        },
        {
            id: 4,
            name: 'DINAS',
            logo: '/img/logo/dinas.webp',
            alt: 'Dinas Logo',
        },
        {
            id: 5,
            name: 'DISDIK',
            logo: '/img/logo/disdik.webp',
            alt: 'DISDIK Logo',
        },
        {
            id: 6,
            name: 'TELKOM',
            logo: '/img/logo/telkom.webp',
            alt: 'TELKOM Logo',
        },
        {
            id: 7,
            name: 'MAESTRO',
            logo: '/img/logo/maestro.webp',
            alt: 'MAESTRO Logo',
        },
        {
            id: 8,
            name: 'REKANUSA',
            logo: '/img/logo/rekanusa.webp',
            alt: 'REKANUSA Logo',
        },
        {
            id: 9,
            name: 'KAIZEN',
            logo: '/img/logo/kaizen.webp',
            alt: 'KAIZEN Logo',
        },
    ],
}) => {
    return (
        <div className="relative container mx-auto max-w-7xl rounded-tl-[95px] bg-[#efefef] px-4">
            {/* Title with decorative stars */}
            <div className="py-12 text-center">
                <h2 className="text-4xl font-bold text-cardhitam md:text-5xl xl:text-5xl">{title}</h2>
            </div>
            <div className="absolute -top-5 right-10 hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="173" height="58" viewBox="0 0 173 58" fill="none">
                    <rect width="29" height="29" fill="#FFB43F" />
                    <rect x="58" width="29" height="29" fill="#FFB43F" />
                    <rect x="115" width="29" height="29" fill="#FFB43F" />
                    <rect x="29" y="29" width="29" height="29" fill="#FFB43F" />
                    <rect x="87" y="29" width="28" height="29" fill="#FFB43F" />
                    <rect x="144" y="29" width="29" height="29" fill="#FFB43F" />
                </svg>
            </div>

            {/* Client logos grid */}
            <div className="flex flex-wrap justify-center gap-5 py-10">
                {clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-center">
                        <img src={client.logo} alt={client.alt} className="w-full object-contain transition-all duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientSection;
