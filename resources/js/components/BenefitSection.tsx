import React from 'react';

interface BenefitCard {
    id: string;
    icon: React.ReactNode;
    description: string;
}

interface BenefitSectionProps {
    title?: string;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
    decorativeImageSrc?: string;
    decorativeImageAlt?: string;
    benefits?: BenefitCard[];
    className?: string;
}

const defaultBenefits: BenefitCard[] = [
    {
        id: '1',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <path
                    d="M23.246 28.8339H46.7543M23.246 41.1655H40.011M35.0001 61.9789C40.8608 61.9776 46.5618 60.068 51.2407 56.5388C55.9197 53.0095 59.3222 48.0527 60.9336 42.4179C62.5451 36.7831 62.2778 30.7768 60.1724 25.3073C58.0669 19.8379 54.2376 15.2028 49.2638 12.103C44.2899 9.00324 38.4419 7.60741 32.6043 8.12661C26.7666 8.64581 21.2567 11.0518 16.908 14.9807C12.5593 18.9096 9.60814 24.1478 8.50097 29.9029C7.39379 35.6581 8.19078 41.6173 10.7714 46.8793C11.0864 47.521 11.1914 48.2443 11.031 48.9385L8.65097 59.2518C8.58388 59.5412 8.59157 59.843 8.67334 60.1286C8.7551 60.4142 8.90824 60.6744 9.11833 60.8844C9.32841 61.0945 9.58852 61.2477 9.87416 61.3294C10.1598 61.4112 10.4615 61.4189 10.751 61.3518L21.0614 58.9689C21.7575 58.8164 22.4849 58.9092 23.1206 59.2314C26.8171 61.0467 30.8819 61.9868 35.0001 61.9789Z"
                    stroke="black"
                    strokeWidth="4.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        description: 'Meningkatkan kemampuan komunikasi yang efektif dan persuasif.',
    },
    {
        id: '2',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                    d="M31.9999 58.6663C46.7279 58.6663 58.6666 46.7277 58.6666 31.9997C58.6666 17.2717 46.7279 5.33301 31.9999 5.33301C17.2719 5.33301 5.33325 17.2717 5.33325 31.9997C5.33325 46.7277 17.2719 58.6663 31.9999 58.6663Z"
                    stroke="black"
                    strokeWidth="5.33333"
                    strokeLinejoin="round"
                />
                <path
                    d="M41.3334 24V25.3333M22.6667 24V25.3333M41.3334 41.3333C41.3334 41.3333 38.6667 46.6667 32.0001 46.6667C25.3334 46.6667 22.6667 41.3333 22.6667 41.3333"
                    stroke="black"
                    strokeWidth="5.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        description: 'Mengembangkan kecerdasan emosional dan kepemimpinan yang positif.',
    },
    {
        id: '3',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
                <path
                    d="M31.5 28.875C34.981 28.875 38.3194 30.2578 40.7808 32.7192C43.2422 35.1806 44.625 38.519 44.625 42V57.75H39.375V42C39.3751 39.9913 38.6076 38.0585 37.2296 36.5971C35.8516 35.1356 33.9672 34.256 31.962 34.1381L31.5 34.125C29.4913 34.1249 27.5585 34.8924 26.0971 36.2704C24.6356 37.6484 23.756 39.5328 23.6381 41.538L23.625 42V57.75H18.375V42C18.375 38.519 19.7578 35.1806 22.2192 32.7192C24.6806 30.2578 28.019 28.875 31.5 28.875Z"
                    fill="black"
                />
            </svg>
        ),
        description: 'Membangun tim yang solid dan kolaboratif dalam mencapai tujuan bersama.',
    },
    {
        id: '4',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                    d="M29.3333 37.333H34.6667V18.6663H29.3333V37.333ZM37.3333 33.333H42.6667V21.333H37.3333V33.333ZM21.3333 31.9997H26.6667V21.333H21.3333V31.9997ZM16 58.6663V47.1997C13.4667 44.8886 11.5004 42.189 10.1013 39.101C8.70222 36.013 8.00178 32.757 8 29.333C8 22.6663 10.3333 16.9997 15 12.333C19.6667 7.66634 25.3333 5.33301 32 5.33301C37.5556 5.33301 42.4782 6.96679 46.768 10.2343C51.0578 13.5019 53.8462 17.757 55.1333 22.9997L58.6 36.6663C58.8222 37.5108 58.6667 38.2779 58.1333 38.9677C57.6 39.6575 56.8889 40.0014 56 39.9997H50.6667V47.9997C50.6667 49.4663 50.1449 50.7223 49.1013 51.7677C48.0578 52.813 46.8018 53.3348 45.3333 53.333H40V58.6663H34.6667V47.9997H45.3333V34.6663H52.5333L50 24.333C48.9778 20.2886 46.8 16.9997 43.4667 14.4663C40.1333 11.933 36.3111 10.6663 32 10.6663C26.8444 10.6663 22.4444 12.4663 18.8 16.0663C15.1556 19.6663 13.3333 24.0441 13.3333 29.1997C13.3333 31.8663 13.8782 34.3997 14.968 36.7997C16.0578 39.1997 17.6018 41.333 19.6 43.1997L21.3333 44.7997V58.6663H16Z"
                    fill="black"
                />
            </svg>
        ),
        description: 'Meningkatkan produktivitas dan inovasi dalam lingkungan kerja.',
    },
];

const BenefitSection: React.FC<BenefitSectionProps> = ({
    title = 'Benefit',
    subtitle = 'Program',
    imageSrc = '/img/general/program.webp',
    imageAlt = 'benefit program',
    decorativeImageSrc = '/img/general/clips2.png',
    decorativeImageAlt = 'clips decoration',
    benefits = defaultBenefits,
    className = '',
}) => {
    return (
        <section className={`bg-white font-poppins ${className}`}>
            <div className="container mx-auto p-6">
                <div className="item-center flex flex-col xl:flex-row">
                    <div className="item-center relative flex w-full flex-col gap-10 md:min-h-[50vh] md:justify-between md:gap-0 lg:min-h-[60vh] xl:w-1/2 2xl:w-[60%]">
                        <div className="container mx-auto flex max-w-xl">
                            <div className="text-4xl leading-tight font-bold text-secondary capitalize md:text-5xl lg:text-7xl">
                                <span className="mr-2 bg-headerbanner px-2 leading-none text-white">{subtitle}</span>
                                {title} <br />
                            </div>
                        </div>

                        <div className="relative z-10 md:w-3/4 lg:min-h-60">
                            <img src={imageSrc} className="h-full w-full rounded-tr-[50px] object-cover md:rounded-tr-[67px]" alt={imageAlt} />
                        </div>
                        <div className="absolute top-3/5 -right-0 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
                            <img src={decorativeImageSrc} className="h-60 w-60 object-cover" alt={decorativeImageAlt} />
                        </div>
                    </div>
                    <div className="mt-10 flex w-full flex-wrap items-start justify-center gap-6 self-center xl:mt-0 xl:w-[50%] xl:justify-start 2xl:w-[40%]">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.id}
                                className={`flex h-60 min-h-[200px] w-[260px] flex-col justify-between gap-4 rounded-tl-[32px] rounded-tr-lg rounded-br-lg rounded-bl-lg bg-[#fcfcfc] p-6 shadow-2xl drop-shadow-2xl ${
                                    index % 2 === 1 ? 'xl:mt-10' : ''
                                }`}
                            >
                                {benefit.icon}
                                <div className="text-base text-[#242424]">{benefit.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
