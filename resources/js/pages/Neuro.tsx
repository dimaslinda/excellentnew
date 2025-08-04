import BenefitSection from '@/components/BenefitSection';
import FasilitasPeserta from '@/components/FasilitasPeserta';
import Footer from '@/components/Footer';
import HeroSectionNeuro from '@/components/HeroSectionNeuro';
import Navbar from '@/components/Navbar';
import NLPTrainingPackages from '@/components/NLPTrainingPackages';
import ProgramGoalsSection from '@/components/ProgramGoalsSection';
import TestimoniSection from '@/components/TestimoniSection';
import VisionSection from '@/components/VisionSection';
import { Head } from '@inertiajs/react';

export default function Neuro() {
    return (
        <>
            <Head title="Neuro - Neuroscience Training Program">
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
                <HeroSectionNeuro />
            </header>

            <main className="font-poppins">
                <section className="bg-white font-poppins">
                    <VisionSection
                        title="Deskripsi Program"
                        description="Neuro-Semantics for High-Performance Teams adalah program pelatihan berbasis pendekatan Meta-Coaching Framework yang dikembangkan oleh Dr. L. Michael Hall, pendiri Neuro-Semantics. Pelatihan ini dirancang untuk membantu tim di perusahaan Anda membangun shared meaning, menyelaraskan nilai kerja, dan menciptakan budaya kolaboratif yang produktif dan berdaya saing tinggi."
                        imageSrc="/img/general/program-neuro.webp"
                        imageAlt="Neuro Vision"
                    />
                </section>

                <ProgramGoalsSection
                    title="Tujuan"
                    subtitle="Program"
                    imageSrc="/img/general/tujuan-neuro.webp"
                    imageAlt="program neuro"
                    decorativeImageSrc="/img/general/clips2.png"
                    decorativeImageAlt="clips2"
                    cards={[
                        {
                            id: 1,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.125 3.6875C20.4135 3.6875 18.7721 4.36738 17.562 5.57758C16.3518 6.78777 15.6719 8.42915 15.6719 10.1406V14.75H11.0625C9.10653 14.75 7.23067 15.527 5.84759 16.9101C4.46451 18.2932 3.6875 20.169 3.6875 22.125V47.9375C3.6875 49.8935 4.46451 51.7693 5.84759 53.1524C7.23067 54.5355 9.10653 55.3125 11.0625 55.3125H47.9375C49.8935 55.3125 51.7693 54.5355 53.1524 53.1524C54.5355 51.7693 55.3125 49.8935 55.3125 47.9375V22.125C55.3125 20.169 54.5355 18.2932 53.1524 16.9101C51.7693 15.527 49.8935 14.75 47.9375 14.75H43.3281V10.1406C43.3281 8.42915 42.6482 6.78777 41.438 5.57758C40.2279 4.36738 38.5865 3.6875 36.875 3.6875H22.125ZM37.7969 14.75V10.1406C37.7969 9.89613 37.6997 9.66165 37.5269 9.48876C37.354 9.31588 37.1195 9.21875 36.875 9.21875H22.125C21.8805 9.21875 21.646 9.31588 21.4731 9.48876C21.3003 9.66165 21.2031 9.89613 21.2031 10.1406V14.75H37.7969ZM11.0625 20.2812H47.9375C48.4265 20.2812 48.8955 20.4755 49.2412 20.8213C49.587 21.167 49.7812 21.636 49.7812 22.125V25.8125H9.21875V22.125C9.21875 21.636 9.413 21.167 9.75877 20.8213C10.1045 20.4755 10.5735 20.2812 11.0625 20.2812ZM9.21875 31.3438V47.9375C9.21875 48.4265 9.413 48.8955 9.75877 49.2412C10.1045 49.587 10.5735 49.7812 11.0625 49.7812H47.9375C48.4265 49.7812 48.8955 49.587 49.2412 49.2412C49.587 48.8955 49.7812 48.4265 49.7812 47.9375V31.3438H33.1875V36.875H25.8125V31.3438H9.21875Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            description: 'Menumbuhkan kesadaran individu terhadap “mengapa” mereka bekerja.',
                        },
                        {
                            id: 2,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
                                    <path
                                        d="M11.8125 41.3438V39.375H7.875V41.3438C7.875 44.9988 9.32695 48.5041 11.9114 51.0886C14.4959 53.6731 18.0012 55.125 21.6562 55.125H27.5625V51.1875H21.6562C19.0455 51.1875 16.5417 50.1504 14.6957 48.3043C12.8496 46.4583 11.8125 43.9545 11.8125 41.3438ZM47.25 21.6563V23.625H51.1875V21.6563C51.1875 18.0012 49.7355 14.4959 47.1511 11.9114C44.5666 9.32695 41.0613 7.875 37.4062 7.875H31.5V11.8125H37.4062C38.6989 11.8125 39.979 12.0671 41.1733 12.5618C42.3676 13.0565 43.4528 13.7816 44.3668 14.6957C45.2809 15.6097 46.006 16.6949 46.5007 17.8892C46.9954 19.0835 47.25 20.3636 47.25 21.6563ZM21.6562 21.6563H9.84375C8.27732 21.6563 6.77504 22.2785 5.6674 23.3862C4.55976 24.4938 3.9375 25.9961 3.9375 27.5625V31.5H7.875V27.5625C7.875 27.0404 8.08242 26.5396 8.45163 26.1704C8.82085 25.8012 9.32161 25.5938 9.84375 25.5938H21.6562C22.1784 25.5938 22.6792 25.8012 23.0484 26.1704C23.4176 26.5396 23.625 27.0404 23.625 27.5625V31.5H27.5625V27.5625C27.5625 25.9961 26.9402 24.4938 25.8326 23.3862C24.725 22.2785 23.2227 21.6563 21.6562 21.6563ZM15.75 19.6875C17.3075 19.6875 18.8301 19.2256 20.1251 18.3603C21.4202 17.495 22.4295 16.2651 23.0256 14.8261C23.6216 13.3872 23.7775 11.8038 23.4737 10.2762C23.1698 8.74857 22.4198 7.34538 21.3185 6.24404C20.2171 5.1427 18.8139 4.39268 17.2863 4.08882C15.7587 3.78496 14.1753 3.94091 12.7364 4.53695C11.2974 5.13299 10.0675 6.14235 9.20218 7.43739C8.33686 8.73242 7.875 10.255 7.875 11.8125C7.875 13.9011 8.70468 15.9041 10.1815 17.381C11.6584 18.8578 13.6614 19.6875 15.75 19.6875ZM15.75 7.875C16.5288 7.875 17.29 8.10593 17.9376 8.53859C18.5851 8.97125 19.0898 9.5862 19.3878 10.3057C19.6858 11.0252 19.7638 11.8169 19.6118 12.5807C19.4599 13.3445 19.0849 14.0461 18.5342 14.5967C17.9836 15.1474 17.282 15.5224 16.5182 15.6743C15.7544 15.8263 14.9627 15.7483 14.2432 15.4503C13.5237 15.1523 12.9087 14.6476 12.4761 14.0001C12.0434 13.3525 11.8125 12.5913 11.8125 11.8125C11.8125 10.7682 12.2273 9.76669 12.9658 9.02827C13.7042 8.28985 14.7057 7.875 15.75 7.875ZM53.1562 49.2188H41.3438C39.7773 49.2188 38.275 49.841 37.1674 50.9487C36.0598 52.0563 35.4375 53.5586 35.4375 55.125V59.0625H39.375V55.125C39.375 54.6029 39.5824 54.1021 39.9516 53.7329C40.3208 53.3637 40.8216 53.1563 41.3438 53.1563H53.1562C53.6784 53.1563 54.1792 53.3637 54.5484 53.7329C54.9176 54.1021 55.125 54.6029 55.125 55.125V59.0625H59.0625V55.125C59.0625 53.5586 58.4402 52.0563 57.3326 50.9487C56.225 49.841 54.7227 49.2188 53.1562 49.2188ZM39.375 39.375C39.375 40.9325 39.8369 42.4551 40.7022 43.7501C41.5675 45.0452 42.7974 46.0545 44.2364 46.6506C45.6753 47.2466 47.2587 47.4025 48.7863 47.0987C50.3139 46.7948 51.7171 46.0448 52.8185 44.9435C53.9198 43.8421 54.6698 42.4389 54.9737 40.9113C55.2775 39.3837 55.1216 37.8003 54.5256 36.3614C53.9295 34.9224 52.9202 33.6925 51.6251 32.8272C50.3301 31.9619 48.8075 31.5 47.25 31.5C45.1614 31.5 43.1584 32.3297 41.6815 33.8065C40.2047 35.2834 39.375 37.2864 39.375 39.375ZM51.1875 39.375C51.1875 40.1538 50.9566 40.915 50.5239 41.5626C50.0913 42.2101 49.4763 42.7148 48.7568 43.0128C48.0373 43.3108 47.2456 43.3888 46.4818 43.2368C45.718 43.0849 45.0164 42.7099 44.4658 42.1592C43.9151 41.6086 43.5401 40.907 43.3882 40.1432C43.2362 39.3794 43.3142 38.5877 43.6122 37.8682C43.9102 37.1487 44.4149 36.5337 45.0624 36.1011C45.71 35.6684 46.4712 35.4375 47.25 35.4375C48.2943 35.4375 49.2958 35.8523 50.0342 36.5908C50.7727 37.3292 51.1875 38.3307 51.1875 39.375Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            description: 'Mengarahkan energi tim untuk selaras dengan visi dan nilai perusahaan.',
                        },
                        {
                            id: 3,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path
                                        d="M29.3333 37.333H34.6667V18.6663H29.3333V37.333ZM37.3333 33.333H42.6667V21.333H37.3333V33.333ZM21.3333 31.9997H26.6667V21.333H21.3333V31.9997ZM16 58.6663V47.1997C13.4667 44.8886 11.5004 42.189 10.1013 39.101C8.70222 36.013 8.00178 32.757 8 29.333C8 22.6663 10.3333 16.9997 15 12.333C19.6667 7.66634 25.3333 5.33301 32 5.33301C37.5556 5.33301 42.4782 6.96679 46.768 10.2343C51.0578 13.5019 53.8462 17.757 55.1333 22.9997L58.6 36.6663C58.8222 37.5108 58.6667 38.2779 58.1333 38.9677C57.6 39.6575 56.8889 40.0014 56 39.9997H50.6667V47.9997C50.6667 49.4663 50.1449 50.7223 49.1013 51.7677C48.0578 52.813 46.8018 53.3348 45.3333 53.333H40V58.6663H34.6667V47.9997H45.3333V34.6663H52.5333L50 24.333C48.9778 20.2886 46.8 16.9997 43.4667 14.4663C40.1333 11.933 36.3111 10.6663 32 10.6663C26.8444 10.6663 22.4444 12.4663 18.8 16.0663C15.1556 19.6663 13.3333 24.0441 13.3333 29.1997C13.3333 31.8663 13.8782 34.3997 14.968 36.7997C16.0578 39.1997 17.6018 41.333 19.6 43.1997L21.3333 44.7997V58.6663H16Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            description: 'Membentuk pola pikir (mindset) yang kolaboratif dan ownership tinggi.',
                        },
                        {
                            id: 4,
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <path
                                        d="M23.246 28.8339H46.7543M23.246 41.1655H40.011M35.0001 61.9789C40.8608 61.9776 46.5618 60.068 51.2407 56.5388C55.9197 53.0095 59.3222 48.0527 60.9336 42.4179C62.5451 36.7831 62.2778 30.7768 60.1724 25.3073C58.0669 19.8379 54.2376 15.2028 49.2638 12.103C44.2899 9.00324 38.4419 7.60741 32.6043 8.12661C26.7666 8.64581 21.2567 11.0518 16.908 14.9807C12.5593 18.9096 9.60814 24.1478 8.50097 29.9029C7.39379 35.6581 8.19078 41.6173 10.7714 46.8793C11.0864 47.521 11.1914 48.2443 11.031 48.9385L8.65097 59.2518C8.58388 59.5412 8.59157 59.843 8.67334 60.1286C8.7551 60.4142 8.90824 60.6744 9.11833 60.8844C9.32841 61.0945 9.58852 61.2477 9.87416 61.3294C10.1598 61.4112 10.4615 61.4189 10.751 61.3518L21.0614 58.9689C21.7575 58.8164 22.4849 58.9092 23.1206 59.2314C26.8171 61.0467 30.8819 61.9868 35.0001 61.9789Z"
                                        stroke="black"
                                        stroke-width="4.375"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            ),
                            description: 'Meningkatkan efektivitas kerja antar tim/divisi melalui Meta Communication.',
                        },
                    ]}
                />

                <NLPTrainingPackages
                    sectionTitle="Paket Pelatihan: Neuro-Semantics for High-Performance Teams"
                    packages={[
                        {
                            id: 1,
                            title: 'Pelatihan untuk Korporasi',
                            duration: '2 Hari (Intensif)',
                            cards: [
                                {
                                    id: 1,
                                    title: 'Meta-States & Self-Leadership',
                                    description: 'Mengenali lapisan makna dalam pikiran dan mengatur kondisi internal untuk performa optimal',
                                },
                                {
                                    id: 2,
                                    title: 'Shared Meaning & Culture Mapping',
                                    description: 'Membentuk kesepakatan makna bersama untuk membangun budaya tim yang kuat',
                                },
                                {
                                    id: 3,
                                    title: 'Meaning Engineering',
                                    description: 'Merancang ulang makna kerja agar lebih bermakna dan relevan dengan tujuan perusahaan',
                                },
                                {
                                    id: 4,
                                    title: 'Meta Communication Skills',
                                    description: 'Meningkatkan kualitas komunikasi yang menyentuh konteks makna, bukan sekadar isi',
                                },
                                {
                                    id: 5,
                                    title: 'Neuro-Semantic Matrix',
                                    description: 'Memetakan bagaimana nilai, identitas, dan keyakinan membentuk perilaku kerja',
                                },
                                {
                                    id: 6,
                                    title: 'Feedback Looping & Alignment Practice',
                                    description: 'Latihan membangun dialog dua arah yang menyelaraskan aksi dengan misi tim',
                                },
                            ],
                        },
                    ]}
                />

                <FasilitasPeserta
                    title="Fasilitas"
                    fasilitas={[
                        {
                            id: '01',
                            title: 'Modul cetak & digital Neuro-Semantics',
                            isHighlighted: false,
                        },
                        {
                            id: '02',
                            title: 'Sertifikat Training Completion',
                            isHighlighted: true,
                        },
                        {
                            id: '03',
                            title: 'Akses template Culture Canvas dan Matrix Mapping',
                            isHighlighted: true,
                        },
                        {
                            id: '04',
                            title: 'Simulasi kasus dan studi nyata dunia kerja',
                            isHighlighted: false,
                        },
                        {
                            id: '05',
                            title: 'Sesi coaching mini (individual/team)',
                            isHighlighted: false,
                        },
                        {
                            id: '06',
                            title: 'Dokumentasi visual & evaluasi akhir',
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
                    ]}
                />

                <BenefitSection
                    title="Bagi Organisasi"
                    subtitle="Benefit"
                    imageSrc="/img/general/benefit-neuro.webp"
                    imageAlt="Neuro Program Benefits"
                    decorativeImageSrc="/img/general/clips2.png"
                    decorativeImageAlt="clips decoration"
                    benefits={[
                        {
                            id: '1',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path
                                        d="M32 58.6667C46.7279 58.6667 58.6667 46.7279 58.6667 32C58.6667 17.2721 46.7279 5.33337 32 5.33337C17.2721 5.33337 5.33337 17.2721 5.33337 32C5.33337 46.7279 17.2721 58.6667 32 58.6667Z"
                                        stroke="black"
                                        strokeWidth="4"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.3334 29.3334C21.3334 29.3334 26.6667 37.3334 32 37.3334C37.3334 37.3334 42.6667 29.3334 42.6667 29.3334M26.6667 21.3334H26.6934M37.3334 21.3334H37.36"
                                        stroke="black"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ),
                            description: 'Meningkatkan engagement dan motivasi kerja berbasis nilai',
                        },
                        {
                            id: '2',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path
                                        d="M32 8V32L45.3334 45.3334M58.6667 32C58.6667 46.7279 46.7279 58.6667 32 58.6667C17.2721 58.6667 5.33337 46.7279 5.33337 32C5.33337 17.2721 17.2721 5.33337 32 5.33337C46.7279 5.33337 58.6667 17.2721 58.6667 32Z"
                                        stroke="black"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ),
                            description: 'Mengurangi konflik antar individu/tim karena misalignment makna',
                        },
                        {
                            id: '3',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path
                                        d="M32 18.6667V32L42.6667 42.6667M58.6667 32C58.6667 46.7279 46.7279 58.6667 32 58.6667C17.2721 58.6667 5.33337 46.7279 5.33337 32C5.33337 17.2721 17.2721 5.33337 32 5.33337C46.7279 5.33337 58.6667 17.2721 58.6667 32Z"
                                        stroke="black"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ),
                            description: 'Mempercepat proses adaptasi terhadap perubahan (change agility)',
                        },
                        {
                            id: '4',
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <path
                                        d="M8 32C8 32 18.6667 10.6667 32 10.6667C45.3334 10.6667 56 32 56 32C56 32 45.3334 53.3334 32 53.3334C18.6667 53.3334 8 32 8 32Z"
                                        stroke="black"
                                        strokeWidth="4"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                                        stroke="black"
                                        strokeWidth="4"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ),
                            description: 'Menjadikan budaya kerja sebagai kekuatan strategis',
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
