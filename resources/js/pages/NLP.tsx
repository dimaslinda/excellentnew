import BenefitSection from '@/components/BenefitSection';
import FasilitasPeserta from '@/components/FasilitasPeserta';
import Footer from '@/components/Footer';
import HeroSectionLayanan from '@/components/HeroSectionLayanan';
import Navbar from '@/components/Navbar';
import NLPTrainingPackages from '@/components/NLPTrainingPackages';
import ProgramGoalsSection from '@/components/ProgramGoalsSection';
import TestimoniSection from '@/components/TestimoniSection';
import VisionSection from '@/components/VisionSection';
import { Head } from '@inertiajs/react';

export default function NLP() {
    return (
        <>
            <Head title="NLP - Natural Language Processing">
                <meta name="description" content="Program pelatihan NLP (Natural Language Processing) dari Excellent Consulting. Pelajari teknik komunikasi efektif, persuasi, dan pemrograman neuro-linguistik untuk meningkatkan kemampuan interpersonal dan leadership." />
                <meta name="keywords" content="NLP training, natural language processing, pelatihan NLP, neuro linguistic programming, komunikasi efektif, persuasi, excellent consulting, NLP Indonesia, pelatihan komunikasi" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Excellent Consulting" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="http://localhost:8000/nlp" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="NLP - Natural Language Processing | Excellent Consulting" />
                <meta property="og:description" content="Program pelatihan NLP (Natural Language Processing) dari Excellent Consulting. Pelajari teknik komunikasi efektif, persuasi, dan pemrograman neuro-linguistik untuk meningkatkan kemampuan interpersonal dan leadership." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:8000/nlp" />
                <meta property="og:image" content="http://localhost:8000/img/general/program-talent.jpg" />
                <meta property="og:site_name" content="Excellent Consulting" />
                <meta property="og:locale" content="id_ID" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NLP - Natural Language Processing | Excellent Consulting" />
                <meta name="twitter:description" content="Program pelatihan NLP untuk meningkatkan kemampuan komunikasi efektif dan pemrograman neuro-linguistik." />
                <meta name="twitter:image" content="http://localhost:8000/img/general/program-talent.jpg" />
                
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <header className="relative font-poppins">
                <Navbar />
                <HeroSectionLayanan backgroundImage="/img/general/bg-nlp.webp" />
            </header>

            <main className="font-poppins">
                <section className="bg-white font-poppins">
                    <VisionSection
                        title="Deskripsi Program"
                        description={[
                            'NLP for Leaders adalah program pelatihan khusus untuk pemimpin dan calon pemimpin di dunia korporasi yang ingin mengembangkan kapasitas communication influence, strategic alignment, dan behavioral transformation.',
                            'Program ini dirancang berdasarkan pendekatan Neuro-Linguistic Programming (NLP) generasi terbaru yang dikenal sebagai NLP 3.0 dikembangkan dan disempurnakan oleh NLP Society, sehingga lebih relevan dengan tantangan kepemimpinan modern: kompleksitas, perubahan cepat, dan kolaborasi lintas budaya.',
                        ]}
                        imageSrc="/img/general/deskripsi-nlp.webp"
                        imageAlt="NLP Vision"
                    />
                </section>

                <ProgramGoalsSection />

                <NLPTrainingPackages />

                <FasilitasPeserta />

                <BenefitSection
                    title="Bagi Perusahaan"
                    subtitle="Benefit"
                    imageSrc="/img/general/benefit.webp"
                    imageAlt="NLP Program Benefits"
                    decorativeImageSrc="/img/general/clips2.png"
                    decorativeImageAlt="clips decoration"
                    benefits={[
                        {
                            id: '1',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="48" viewBox="0 0 59 48" fill="none">
                                    <path d="M41.0718 11.4563V1.28027H58.7998V48.0003H47.4078V11.4563H41.0718Z" fill="#1E1E1E" />
                                    <path
                                        d="M0.473633 24.0003C0.473633 16.6616 1.88163 10.8803 4.69763 6.65631C7.5563 2.43231 12.143 0.320312 18.4576 0.320312C24.7723 0.320312 29.3376 2.43231 32.1536 6.65631C35.0123 10.8803 36.4416 16.6616 36.4416 24.0003C36.4416 31.4243 35.0123 37.2483 32.1536 41.4723C29.3376 45.6963 24.7723 47.8083 18.4576 47.8083C12.143 47.8083 7.5563 45.6963 4.69763 41.4723C1.88163 37.2483 0.473633 31.4243 0.473633 24.0003ZM25.6896 24.0003C25.6896 19.691 25.2203 16.3843 24.2816 14.0803C23.343 11.7336 21.4016 10.5603 18.4576 10.5603C15.5136 10.5603 13.5723 11.7336 12.6336 14.0803C11.695 16.3843 11.2256 19.691 11.2256 24.0003C11.2256 26.9017 11.3963 29.3123 11.7376 31.2323C12.079 33.1096 12.7616 34.6456 13.7856 35.8403C14.8523 36.9923 16.4096 37.5683 18.4576 37.5683C20.5056 37.5683 22.0416 36.9923 23.0656 35.8403C24.1323 34.6456 24.8363 33.1096 25.1776 31.2323C25.519 29.3123 25.6896 26.9017 25.6896 24.0003Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                            ),
                            description: 'Pemimpin yang lebih visioner, komunikatif, dan mampu menavigasi perubahan',
                        },
                        {
                            id: '2',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="48" viewBox="0 0 74 48" fill="none">
                                    <path
                                        d="M41.5899 39.2319C43.0406 38.0799 43.7019 37.5465 43.5739 37.6319C47.7552 34.1759 51.0406 31.3385 53.4299 29.1199C55.8619 26.9012 57.9099 24.5759 59.5739 22.1439C61.2379 19.7119 62.0699 17.3439 62.0699 15.0399C62.0699 13.2905 61.6646 11.9252 60.8539 10.9439C60.0432 9.96253 58.8272 9.47186 57.2059 9.47186C55.5846 9.47186 54.3046 10.0905 53.3659 11.3279C52.4699 12.5225 52.0219 14.2292 52.0219 16.4479H41.4619C41.5472 12.8212 42.3152 9.79186 43.7659 7.35986C45.2592 4.92786 47.2006 3.13586 49.5899 1.98386C52.0219 0.83186 54.7099 0.255859 57.6539 0.255859C62.7312 0.255859 66.5499 1.55719 69.1099 4.15986C71.7126 6.76253 73.0139 10.1545 73.0139 14.3359C73.0139 18.9012 71.4566 23.1465 68.3419 27.0719C65.2272 30.9545 61.2592 34.7519 56.4379 38.4639H73.7179V47.3599H41.5899V39.2319Z"
                                        fill="#1E1E1E"
                                    />
                                    <path
                                        d="M0.223633 24.0003C0.223633 16.6616 1.63163 10.8803 4.44763 6.65631C7.3063 2.43231 11.893 0.320312 18.2076 0.320312C24.5223 0.320312 29.0876 2.43231 31.9036 6.65631C34.7623 10.8803 36.1916 16.6616 36.1916 24.0003C36.1916 31.4243 34.7623 37.2483 31.9036 41.4723C29.0876 45.6963 24.5223 47.8083 18.2076 47.8083C11.893 47.8083 7.3063 45.6963 4.44763 41.4723C1.63163 37.2483 0.223633 31.4243 0.223633 24.0003ZM25.4396 24.0003C25.4396 19.691 24.9703 16.3843 24.0316 14.0803C23.093 11.7336 21.1516 10.5603 18.2076 10.5603C15.2636 10.5603 13.3223 11.7336 12.3836 14.0803C11.445 16.3843 10.9756 19.691 10.9756 24.0003C10.9756 26.9017 11.1463 29.3123 11.4876 31.2323C11.829 33.1096 12.5116 34.6456 13.5356 35.8403C14.6023 36.9923 16.1596 37.5683 18.2076 37.5683C20.2556 37.5683 21.7916 36.9923 22.8156 35.8403C23.8823 34.6456 24.5863 33.1096 24.9276 31.2323C25.269 29.3123 25.4396 26.9017 25.4396 24.0003Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                            ),
                            description: 'Tim yang lebih selaras, minim resistensi, dan lebih cepat adaptasi',
                        },
                        {
                            id: '3',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="49" viewBox="0 0 75 49" fill="none">
                                    <path
                                        d="M42.264 14.4644C42.4347 9.89905 43.928 6.37905 46.744 3.90438C49.56 1.42972 53.3787 0.192383 58.2 0.192383C61.4 0.192383 64.1307 0.74705 66.392 1.85638C68.696 2.96572 70.424 4.48038 71.576 6.40038C72.7707 8.32038 73.368 10.4751 73.368 12.8644C73.368 15.6804 72.664 17.9844 71.256 19.7764C69.848 21.5257 68.2053 22.7204 66.328 23.3604V23.6164C68.76 24.427 70.68 25.7711 72.088 27.6484C73.496 29.5257 74.2 31.9364 74.2 34.8804C74.2 37.5257 73.5813 39.8724 72.344 41.9204C71.1493 43.9257 69.3787 45.5044 67.032 46.6564C64.728 47.8084 61.976 48.3844 58.776 48.3844C53.656 48.3844 49.56 47.1257 46.488 44.6084C43.4587 42.0911 41.8587 38.2937 41.688 33.2164H52.312C52.3547 35.0937 52.888 36.5871 53.912 37.6964C54.936 38.7631 56.4293 39.2964 58.392 39.2964C60.056 39.2964 61.336 38.8271 62.232 37.8884C63.1707 36.9071 63.64 35.6271 63.64 34.0484C63.64 32.0004 62.9787 30.5284 61.656 29.6324C60.376 28.6937 58.3067 28.2244 55.448 28.2244H53.4V19.3284H55.448C57.624 19.3284 59.3733 18.9657 60.696 18.2404C62.0613 17.4724 62.744 16.1284 62.744 14.2084C62.744 12.6724 62.3173 11.4777 61.464 10.6244C60.6107 9.77105 59.4373 9.34438 57.944 9.34438C56.3227 9.34438 55.1067 9.83505 54.296 10.8164C53.528 11.7977 53.08 13.0137 52.952 14.4644H42.264Z"
                                        fill="#1E1E1E"
                                    />
                                    <path
                                        d="M0.129883 24.0003C0.129883 16.6616 1.53788 10.8803 4.35388 6.65631C7.21255 2.43231 11.7992 0.320312 18.1139 0.320312C24.4285 0.320312 28.9939 2.43231 31.8099 6.65631C34.6686 10.8803 36.0979 16.6616 36.0979 24.0003C36.0979 31.4243 34.6686 37.2483 31.8099 41.4723C28.9939 45.6963 24.4285 47.8083 18.1139 47.8083C11.7992 47.8083 7.21255 45.6963 4.35388 41.4723C1.53788 37.2483 0.129883 31.4243 0.129883 24.0003ZM25.3459 24.0003C25.3459 19.691 24.8766 16.3843 23.9379 14.0803C22.9992 11.7336 21.0579 10.5603 18.1139 10.5603C15.1699 10.5603 13.2285 11.7336 12.2899 14.0803C11.3512 16.3843 10.8819 19.691 10.8819 24.0003C10.8819 26.9017 11.0526 29.3123 11.3939 31.2323C11.7352 33.1096 12.4179 34.6456 13.4419 35.8403C14.5086 36.9923 16.0659 37.5683 18.1139 37.5683C20.1619 37.5683 21.6979 36.9923 22.7219 35.8403C23.7885 34.6456 24.4925 33.1096 24.8339 31.2323C25.1752 29.3123 25.3459 26.9017 25.3459 24.0003Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                            ),
                            description: 'Komunikasi antar departemen lebih terstruktur dan produktif',
                        },
                        {
                            id: '4',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
                                    <path
                                        d="M42.8545 39.6799V30.8479L63.0785 1.91992H75.3025V30.2079H80.5505V39.6799H75.3025V47.9999H64.3585V39.6799H42.8545ZM65.1265 13.9519L54.3745 30.2079H65.1265V13.9519Z"
                                        fill="#1E1E1E"
                                    />
                                    <path
                                        d="M0.848633 24.0003C0.848633 16.6616 2.25663 10.8803 5.07263 6.65631C7.9313 2.43231 12.518 0.320312 18.8326 0.320312C25.1473 0.320312 29.7126 2.43231 32.5286 6.65631C35.3873 10.8803 36.8166 16.6616 36.8166 24.0003C36.8166 31.4243 35.3873 37.2483 32.5286 41.4723C29.7126 45.6963 25.1473 47.8083 18.8326 47.8083C12.518 47.8083 7.9313 45.6963 5.07263 41.4723C2.25663 37.2483 0.848633 31.4243 0.848633 24.0003ZM26.0646 24.0003C26.0646 19.691 25.5953 16.3843 24.6566 14.0803C23.718 11.7336 21.7766 10.5603 18.8326 10.5603C15.8886 10.5603 13.9473 11.7336 13.0086 14.0803C12.07 16.3843 11.6006 19.691 11.6006 24.0003C11.6006 26.9017 11.7713 29.3123 12.1126 31.2323C12.454 33.1096 13.1366 34.6456 14.1606 35.8403C15.2273 36.9923 16.7846 37.5683 18.8326 37.5683C20.8806 37.5683 22.4166 36.9923 23.4406 35.8403C24.5073 34.6456 25.2113 33.1096 25.5526 31.2323C25.894 29.3123 26.0646 26.9017 26.0646 24.0003Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                            ),
                            description: 'Penguatan budaya organisasi melalui transformasi internal',
                        },
                    ]}
                />

                <section className="relative bg-white py-16 font-poppins">
                    <TestimoniSection />
                    <div className="absolute bottom-0 left-0 hidden md:block">
                        <img src="/img/general/clips.png" className="w-120" alt="clips" />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
