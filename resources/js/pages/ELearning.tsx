import BenefitSection from '@/components/BenefitSection';
import FasilitasPeserta from '@/components/FasilitasPeserta';
import Footer from '@/components/Footer';
import HeroSectionLearning from '@/components/HeroSectionLearning';
import MateriPembelajaran from '@/components/MateriPembelajaran';
import Navbar from '@/components/Navbar';
import ProgramGoalsSection from '@/components/ProgramGoalsSection';
import TestimoniSection from '@/components/TestimoniSection';
import VisionSection from '@/components/VisionSection';
import { Head } from '@inertiajs/react';

export default function ELearning() {
    return (
        <>
            <Head title="E-Learning - Platform Pembelajaran Digital | Excellent Consulting">
                {/* Meta Description */}
                <meta
                    name="description"
                    content="Platform E-Learning digital Excellent Consulting menyediakan pembelajaran berbasis sains untuk pengembangan SDM. Akses materi talent mapping, STIFiN assessment, dan program pelatihan korporat online."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="e-learning platform, pembelajaran digital, online training, talent mapping online, STIFiN assessment, pelatihan korporat online, LMS Indonesia, digital learning, excellent consulting elearning, kursus online SDM"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="E-Learning Platform - Pembelajaran Digital Berbasis Sains | Excellent Consulting" />
                <meta
                    property="og:description"
                    content="Platform pembelajaran digital untuk pengembangan SDM dengan materi talent mapping, assessment, dan pelatihan korporat. Akses kapan saja, dimana saja."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://excellentteam.id/elearning" />
                <meta property="og:image" content="https://excellentteam.id/img/general/program-talent.webp" />
                <meta property="og:image:alt" content="E-Learning Platform Excellent Consulting" />
                <meta property="og:site_name" content="Excellent Consulting" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="E-Learning Platform - Pembelajaran Digital Berbasis Sains" />
                <meta
                    name="twitter:description"
                    content="Platform pembelajaran digital untuk pengembangan SDM dengan materi talent mapping, assessment, dan pelatihan korporat."
                />
                <meta name="twitter:image" content="https://excellentteam.id/img/general/program-talent.webp" />

                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Excellent Consulting" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://excellentteam.id/elearning" />

                {/* Fonts */}
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
                <HeroSectionLearning />
            </header>

            <main className="font-poppins">
                <section className="bg-white font-poppins">
                    <VisionSection
                        title="Deskripsi Program"
                        description="e-Learning & Digital Academy for Corporate adalah layanan pembelajaran digital untuk perusahaan yang ingin meningkatkan kompetensi SDM secara berkelanjutan dan efisien. Kami menyediakan platform LMS yang dapat dikustomisasi untuk pelatihan internal, onboarding, hingga program skill seperti UI/UX, Digital Marketing, dan Design Thinking."
                        imageSrc="/img/general/visi.webp"
                        imageAlt="E-Learning Vision"
                    />
                </section>

                <ProgramGoalsSection
                    title="Tujuan"
                    subtitle="Program"
                    imageSrc="/img/general/tujuan-talent.webp"
                    imageAlt="program e-learning"
                    decorativeImageSrc="/img/general/clips2.png"
                    decorativeImageAlt="clips2"
                    cards={[
                        {
                            id: 1,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path
                                        d="M30.6998 27.1831C28.8253 27.1633 26.9985 26.5894 25.4494 25.5336C23.9004 24.4778 22.6983 22.9874 21.9946 21.2498C21.2909 19.5123 21.1169 17.6054 21.4947 15.7692C21.8725 13.933 22.7851 12.2496 24.1176 10.931C25.45 9.61239 27.1429 8.71749 28.9829 8.35896C30.823 8.00043 32.7279 8.19431 34.458 8.91619C36.1881 9.63807 37.6659 10.8557 38.7055 12.4157C39.745 13.9757 40.2997 15.8084 40.2998 17.6831C40.2822 20.2145 39.2619 22.6358 37.4625 24.4164C35.6631 26.1971 33.2313 27.192 30.6998 27.1831ZM30.6998 11.5164C29.4846 11.5361 28.3023 11.9145 27.3015 12.6039C26.3006 13.2934 25.5258 14.2633 25.0743 15.3917C24.6229 16.5201 24.515 17.7567 24.7641 18.9463C25.0132 20.1358 25.6083 21.2252 26.4745 22.0777C27.3408 22.9301 28.4397 23.5076 29.6331 23.7375C30.8265 23.9675 32.0612 23.8397 33.1822 23.3701C34.3032 22.9006 35.2605 22.1103 35.9337 21.0985C36.607 20.0866 36.9663 18.8984 36.9665 17.6831C36.9489 16.0357 36.2798 14.4623 35.1055 13.3067C33.9313 12.1512 32.3473 11.5075 30.6998 11.5164Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M30.7 27.1831C28.8255 27.1633 26.9987 26.5894 25.4496 25.5336C23.9005 24.4778 22.6985 22.9874 21.9948 21.2498C21.291 19.5123 21.1171 17.6054 21.4949 15.7692C21.8727 13.933 22.7853 12.2496 24.1177 10.931C25.4502 9.61239 27.1431 8.71749 28.9831 8.35896C30.8232 8.00043 32.7281 8.19431 34.4582 8.91619C36.1883 9.63807 37.6661 10.8557 38.7056 12.4157C39.7452 13.9757 40.2999 15.8084 40.3 17.6831C40.2824 20.2145 39.2621 22.6358 37.4627 24.4164C35.6633 26.1971 33.2315 27.192 30.7 27.1831ZM30.7 11.5164C29.4848 11.5361 28.3025 11.9145 27.3017 12.6039C26.3008 13.2934 25.526 14.2633 25.0745 15.3917C24.6231 16.5201 24.5151 17.7567 24.7643 18.9463C25.0134 20.1358 25.6084 21.2252 26.4747 22.0777C27.341 22.9301 28.4398 23.5076 29.6332 23.7375C30.8267 23.9675 32.0614 23.8397 33.1824 23.3701C34.3034 22.9006 35.2607 22.1103 35.9339 21.0985C36.6072 20.0866 36.9665 18.8984 36.9667 17.6831C36.9491 16.0357 36.28 14.4623 35.1057 13.3067C33.9314 12.1512 32.3475 11.5075 30.7 11.5164ZM36.5167 29.4164C29.1242 28.13 21.5139 29.3009 14.85 32.7497C14.377 33.0124 13.9853 33.4001 13.7178 33.8704C13.4503 34.3407 13.3173 34.8756 13.3333 35.4164V41.3497C13.3333 41.7918 13.5089 42.2157 13.8215 42.5283C14.134 42.8408 14.558 43.0164 15 43.0164C15.442 43.0164 15.8659 42.8408 16.1785 42.5283C16.4911 42.2157 16.6667 41.7918 16.6667 41.3497V35.6331C22.8461 32.5325 29.8733 31.5487 36.6667 32.8331L36.5167 29.4164Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M54.9998 36.6665H43.8332V34.1999C43.8332 33.7578 43.6576 33.3339 43.345 33.0214C43.0325 32.7088 42.6085 32.5332 42.1665 32.5332C41.7245 32.5332 41.3006 32.7088 40.988 33.0214C40.6754 33.3339 40.4998 33.7578 40.4998 34.1999V36.6665H28.3332C27.8911 36.6665 27.4672 36.8421 27.1547 37.1547C26.8421 37.4673 26.6665 37.8912 26.6665 38.3332V54.9999C26.6665 55.4419 26.8421 55.8658 27.1547 56.1784C27.4672 56.4909 27.8911 56.6665 28.3332 56.6665H54.9998C55.4419 56.6665 55.8658 56.4909 56.1783 56.1784C56.4909 55.8658 56.6665 55.4419 56.6665 54.9999V38.3332C56.6665 37.8912 56.4909 37.4673 56.1783 37.1547C55.8658 36.8421 55.4419 36.6665 54.9998 36.6665ZM53.3332 53.3332H29.9998V39.9999H40.4998V40.6832C40.4998 41.1252 40.6754 41.5492 40.988 41.8617C41.3006 42.1743 41.7245 42.3499 42.1665 42.3499C42.6085 42.3499 43.0325 42.1743 43.345 41.8617C43.6576 41.5492 43.8332 41.1252 43.8332 40.6832V39.9999H53.3332V53.3332Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M36.3502 45.6999H46.2835V48.0332H36.3502V45.6999ZM18.0668 20.3999C13.4526 20.4771 8.91832 21.6178 4.81683 23.7332C4.37077 23.9688 3.99712 24.3212 3.73585 24.7528C3.47458 25.1843 3.33551 25.6787 3.3335 26.1832V31.3499C3.3335 31.7919 3.50909 32.2158 3.82165 32.5284C4.13421 32.8409 4.55814 33.0165 5.00016 33.0165C5.44219 33.0165 5.86611 32.8409 6.17867 32.5284C6.49123 32.2158 6.66683 31.7919 6.66683 31.3499V26.5165C10.5857 24.5659 14.9244 23.61 19.3002 23.7332C18.7281 22.6885 18.3126 21.5654 18.0668 20.3999ZM55.1835 23.7165C51.5049 21.7869 47.4621 20.6513 43.3168 20.3832C43.0718 21.5465 42.6622 22.6689 42.1002 23.7165C46.0052 23.8106 49.8412 24.7667 53.3335 26.5165V31.3499C53.3335 31.7919 53.5091 32.2158 53.8216 32.5284C54.1342 32.8409 54.5581 33.0165 55.0002 33.0165C55.4422 33.0165 55.8661 32.8409 56.1787 32.5284C56.4912 32.2158 56.6668 31.7919 56.6668 31.3499V26.1832C56.6678 25.6759 56.5302 25.178 56.2688 24.7432C56.0073 24.3085 55.6321 23.9535 55.1835 23.7165ZM17.7668 17.6832V16.5665C16.4612 16.3918 15.2732 15.7203 14.4503 14.6917C13.6273 13.6631 13.2328 12.3568 13.3487 11.0446C13.4647 9.73247 14.0823 8.51558 15.0729 7.6473C16.0635 6.77901 17.3508 6.32623 18.6668 6.3832C20.0357 6.38072 21.3514 6.91298 22.3335 7.86654C23.2004 7.15239 24.152 6.54783 25.1668 6.06654C24.0328 4.76263 22.5304 3.83293 20.8575 3.39999C19.1846 2.96704 17.4197 3.05116 15.7956 3.64127C14.1714 4.23138 12.7642 5.29977 11.7594 6.70563C10.7546 8.11148 10.1993 9.78881 10.1668 11.5165C10.2018 13.6311 11.0238 15.6567 12.4723 17.1977C13.9208 18.7387 15.8918 19.6843 18.0002 19.8499C17.8586 19.1359 17.7805 18.4109 17.7668 17.6832ZM41.2835 3.04987C40.1381 3.05012 39.0043 3.27871 37.9484 3.72228C36.8924 4.16584 35.9355 4.81548 35.1335 5.6332C36.2591 6.04394 37.3243 6.60455 38.3002 7.29987C39.0782 6.75975 39.9883 6.44093 40.9334 6.37739C41.8784 6.31385 42.823 6.50797 43.6663 6.93907C44.5097 7.37017 45.2203 8.02208 45.7223 8.82528C46.2243 9.62848 46.4989 10.5529 46.5168 11.4999C46.5063 12.4726 46.2206 13.4225 45.6926 14.2395C45.1646 15.0565 44.416 15.7073 43.5335 16.1165C43.6012 16.6304 43.6346 17.1482 43.6335 17.6665C43.6283 18.3364 43.5725 19.005 43.4668 19.6665C45.2825 19.1998 46.8929 18.1458 48.0474 16.6688C49.2019 15.1918 49.8357 13.3745 49.8502 11.4999C49.8282 9.24538 48.9148 7.09121 47.3097 5.50793C45.7046 3.92466 43.5381 3.04096 41.2835 3.04987Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            description: 'Menyediakan akses belajar mandiri dan fleksibel kepada seluruh karyawan.',
                        },
                        {
                            id: 2,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                    <path
                                        d="M35.0312 49.7812H46.0938V38.7188H47.9375C49.4045 38.7187 50.8114 38.136 51.8487 37.0987C52.886 36.0614 53.4687 34.6545 53.4688 33.1875C53.4687 31.7205 52.886 30.3136 51.8487 29.2763C50.8114 28.239 49.4045 27.6562 47.9375 27.6562H46.0938V14.75H35.0312M35.0312 49.7812H33.1875M35.0312 49.7812C35.0312 47.8253 34.2542 45.9494 32.8712 44.5663C31.4881 43.1833 29.6122 42.4062 27.6562 42.4062C25.7003 42.4062 23.8244 43.1833 22.4413 44.5663C21.0583 45.9494 20.2813 47.8253 20.2812 49.7812M35.0312 14.75H33.1875M35.0312 14.75C35.0312 12.794 34.2542 10.9182 32.8712 9.53509C31.4881 8.15201 29.6122 7.375 27.6562 7.375C25.7003 7.375 23.8244 8.15201 22.4413 9.53509C21.0583 10.9182 20.2813 12.794 20.2812 14.75M20.2812 49.7812H9.21875V35.0312H14.75C16.217 35.0312 17.6239 34.4485 18.6612 33.4112C19.6985 32.3739 20.2812 30.967 20.2812 29.5C20.2812 28.033 19.6985 26.6261 18.6612 25.5888C17.6239 24.5515 16.217 23.9688 14.75 23.9688H9.21875V14.75H20.2812M20.2812 49.7812H22.125M20.2812 14.75H22.125"
                                        stroke="black"
                                        stroke-width="3.6875"
                                    />
                                </svg>
                            ),
                            description: 'Meningkatkan kompetensi digital dan soft skills yang relevan dengan industri saat ini.',
                        },
                        {
                            id: 3,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                    <path
                                        d="M61.1967 31.0622C61.1627 32.7554 59.7007 33.9998 58.0109 33.9998H37.4001C36.4984 33.9998 35.6336 33.6416 34.996 33.004C34.3584 32.3663 34.0001 31.5015 34.0001 30.5998V9.989C34.0001 8.2958 35.2445 6.8372 36.9377 6.8032L37.4001 6.7998C40.5646 6.79966 43.6973 7.43058 46.615 8.65566C49.5328 9.88073 52.1769 11.6754 54.3927 13.9346C56.6085 16.1938 58.3516 18.8722 59.5198 21.8131C60.6881 24.754 61.2582 27.8983 61.1967 31.0622ZM37.4001 10.1998V30.5998H57.8001C57.8001 25.1894 55.6509 20.0006 51.8251 16.1748C47.9994 12.3491 42.8106 10.1998 37.4001 10.1998ZM30.6001 15.3644C30.6004 15.1301 30.5521 14.8984 30.4585 14.6836C30.3649 14.4689 30.228 14.2758 30.0562 14.1165C29.8844 13.9572 29.6816 13.8351 29.4604 13.7579C29.2393 13.6807 29.0045 13.65 28.7709 13.6678C24.2333 14.0181 19.8912 15.6621 16.2594 18.4049C12.6276 21.1476 9.85838 24.8742 8.27996 29.1429C6.70154 33.4116 6.38012 38.0433 7.3538 42.4891C8.32749 46.9348 10.5555 51.0082 13.7736 54.2263C16.9917 57.4445 21.0651 59.6725 25.5109 60.6461C29.9566 61.6198 34.5884 61.2984 38.857 59.72C43.1257 58.1416 46.8523 55.3723 49.5951 51.7405C52.3379 48.1087 53.9819 43.7666 54.3321 39.229C54.3499 38.9954 54.3193 38.7607 54.2421 38.5395C54.1649 38.3183 54.0428 38.1155 53.8835 37.9437C53.7242 37.772 53.5311 37.635 53.3163 37.5414C53.1016 37.4478 52.8698 37.3996 52.6355 37.3998H35.7001C34.3475 37.3998 33.0503 36.8625 32.0939 35.906C31.1375 34.9496 30.6001 33.6524 30.6001 32.2998V15.3644ZM10.2001 37.3998C10.1994 32.5783 11.9064 27.9124 15.0184 24.2297C18.1303 20.547 22.4461 18.0856 27.2001 17.282V32.2998C27.2001 33.416 27.42 34.5213 27.8472 35.5526C28.2743 36.5839 28.9004 37.5209 29.6897 38.3102C31.2838 39.9043 33.4458 40.7998 35.7001 40.7998H50.7179C49.8518 45.832 47.1306 50.3567 43.0914 53.4806C39.0523 56.6045 33.9888 58.1007 28.9004 57.6737C23.8121 57.2467 19.0687 54.9277 15.6067 51.1743C12.1446 47.4209 10.2155 42.506 10.2001 37.3998Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            description: 'Memudahkan HR memantau progres, hasil, dan pelaksanaan program pelatihan.',
                        },
                        {
                            id: 4,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path
                                        d="M29.3333 37.333H34.6667V18.6663H29.3333V37.333ZM37.3333 33.333H42.6667V21.333H37.3333V33.333ZM21.3333 31.9997H26.6667V21.333H21.3333V31.9997ZM16 58.6663V47.1997C13.4667 44.8886 11.5004 42.189 10.1013 39.101C8.70222 36.013 8.00178 32.757 8 29.333C8 22.6663 10.3333 16.9997 15 12.333C19.6667 7.66634 25.3333 5.33301 32 5.33301C37.5556 5.33301 42.4782 6.96679 46.768 10.2343C51.0578 13.5019 53.8462 17.757 55.1333 22.9997L58.6 36.6663C58.8222 37.5108 58.6667 38.2779 58.1333 38.9677C57.6 39.6575 56.8889 40.0014 56 39.9997H50.6667V47.9997C50.6667 49.4663 50.1449 50.7223 49.1013 51.7677C48.0578 52.813 46.8018 53.3348 45.3333 53.333H40V58.6663H34.6667V47.9997H45.3333V34.6663H52.5333L50 24.333C48.9778 20.2886 46.8 16.9997 43.4667 14.4663C40.1333 11.933 36.3111 10.6663 32 10.6663C26.8444 10.6663 22.4444 12.4663 18.8 16.0663C15.1556 19.6663 13.3333 24.0441 13.3333 29.1997C13.3333 31.8663 13.8782 34.3997 14.968 36.7997C16.0578 39.1997 17.6018 41.333 19.6 43.1997L21.3333 44.7997V58.6663H16Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            description: 'Memberikan sertifikasi internal sebagai bentuk validasi kompetensi.',
                        },
                    ]}
                />

                <MateriPembelajaran
                    items={[
                        {
                            id: '1',
                            title: 'UI/UX Fundamentals',
                            description: 'Memahami desain antarmuka & pengalaman pengguna untuk solusi digital yang ramah pengguna',
                        },
                        {
                            id: '2',
                            title: 'Corporate Onboarding (opsional)',
                            description: 'Menstandarisasi pemahaman karyawan baru terhadap budaya kerja dan sistem perusahaan',
                        },
                        {
                            id: '3',
                            title: 'Digital Marketing Essentials',
                            description: 'Mempelajari strategi pemasaran online dan analitik digital untuk pertumbuhan bisnis',
                        },
                        {
                            id: '4',
                            title: 'Custom Internal Courses',
                            description: 'Pelatihan konten internal perusahaan dengan fitur tracking dan evaluasi',
                        },
                        {
                            id: '5',
                            title: 'Design Thinking for Innovation',
                            description: 'Mendorong inovasi melalui empati, eksplorasi masalah, dan uji solusi',
                        },
                        {
                            id: '6',
                            title: 'AI for Business Productivity',
                            description: 'Mengoptimalkan AI untuk efisiensi kerja, otomatisasi, dan peningkatan performa bisnis',
                        },
                    ]}
                />

                <FasilitasPeserta
                    title="Fasilitas"
                    fasilitas={[
                        {
                            id: '01',
                            title: 'Akses LMS korporasi berbasis akun (private & secure)',
                            isHighlighted: false,
                        },
                        {
                            id: '02',
                            title: 'Modul dalam bentuk video interaktif, teks, kuis, dan tugas praktis',
                            isHighlighted: true,
                        },
                        {
                            id: '03',
                            title: 'Sertifikat digital resmi setelah kelulusan',
                            isHighlighted: true,
                        },
                        {
                            id: '04',
                            title: 'Forum diskusi & leaderboard (opsional)',
                            isHighlighted: false,
                        },
                    ]}
                />

                <FasilitasPeserta
                    title="Fasilitas"
                    subtitle="Perusahaan"
                    fasilitas={[
                        {
                            id: '01',
                            title: 'Dashboard admin memantau progres, nilai, dan aktivitas peserta',
                            isHighlighted: false,
                        },
                        {
                            id: '02',
                            title: 'Kustomisasi tampilan, domain, dan konten LMS sesuai kebutuhan perusahaan',
                            isHighlighted: true,
                        },
                        {
                            id: '03',
                            title: 'Integrasi konten internal seperti SOP, compliance, dan product knowledge',
                            isHighlighted: true,
                        },
                        {
                            id: '04',
                            title: 'Laporan kompetensi serta pelatihan penggunaan sistem untuk tim HR atau L&D',
                            isHighlighted: false,
                        },
                    ]}
                />

                <BenefitSection
                    title="Bagi Organisasi"
                    subtitle="Benefit"
                    imageSrc="/img/general/benefit-talent.webp"
                    imageAlt="E-Learning Program Benefits"
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
                            description: 'Mendukung budaya kerja yang berorientasi pada continuous learning',
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
                            description: 'Mengurangi biaya pelatihan onsite dan logistik',
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
                            description: 'Mendukung scalable learning untuk karyawan lintas cabang/daerah',
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
                            description: 'Siap diintegrasikan dengan sistem HRIS atau kebutuhan pelatihan jangka panjang',
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
