import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Index() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="Beranda">
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
                <nav className="fixed top-0 z-20 w-full bg-transparent">
                    <div className="bg-bgnavbar mx-auto flex max-w-screen-xl flex-wrap items-center justify-between rounded-lg border-2 border-navbar bg-[#F4F6FF94]/60 p-4 shadow-xl drop-shadow-xl backdrop-blur-md lg:mt-5 lg:rounded-full lg:px-8">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="/img/general/logo.webp" className="h-8 xl:h-10" alt="logo ET" />
                        </Link>

                        <div className="flex space-x-3 lg:order-2 lg:space-x-0">
                            <a
                                href="https://wa.me/6282125999029"
                                target="_blank"
                                className="cursor-pointer rounded-full bg-tombol px-9 py-2 text-center font-poppins text-sm font-medium text-white capitalize hover:bg-tombol focus:ring-4 focus:ring-navbar focus:outline-none"
                            >
                                Konsultasi
                            </a>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                type="button"
                                className="text-[#FFB43F ] inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-tombol focus:ring-2 focus:ring-tombol focus:outline-none lg:hidden"
                                aria-controls="navbar-sticky"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={`w-full items-center justify-between lg:order-1 lg:flex lg:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                            id="navbar-sticky"
                        >
                            <ul className="mt-4 flex flex-col rounded-lg border border-navbar bg-cardhitam p-4 font-poppins text-base font-medium capitalize lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0 xl:text-xl rtl:space-x-reverse">
                                <li>
                                    <Link
                                        href="/"
                                        className="lg:text-[#FFB43F ] lg:hover:text-[#FFB43F ] block rounded-sm bg-tombol px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:hover:bg-transparent"
                                        aria-current="page"
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li className="relative">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="lg:hover:text-[#FFB43F ] flex w-full cursor-pointer items-center justify-between rounded-sm px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-cardhitam lg:hover:bg-transparent"
                                    >
                                        Layanan Kami
                                        <svg
                                            className="ms-2.5 h-2.5 w-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow">
                                            <ul className="py-2 text-sm font-bold" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link
                                                        href="/inhouse"
                                                        className="block rounded-sm px-3 py-2 text-cardhitam capitalize hover:bg-tombol hover:text-white"
                                                    >
                                                        In House Training
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/modul"
                                                        className="block rounded-sm px-3 py-2 text-cardhitam capitalize hover:bg-tombol hover:text-white"
                                                    >
                                                        Modul Ajar
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/webinar"
                                                        className="block rounded-sm px-3 py-2 text-cardhitam capitalize hover:bg-tombol hover:text-white"
                                                    >
                                                        Webinar
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/ecourse"
                                                        className="block rounded-sm px-3 py-2 text-cardhitam capitalize hover:bg-tombol hover:text-white"
                                                    >
                                                        E-Course
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/bootcamp"
                                                        className="block rounded-sm px-3 py-2 text-cardhitam capitalize hover:bg-tombol hover:text-white"
                                                    >
                                                        Bootcamp
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/eskul"
                                                        className="block rounded-sm px-3 py-2 text-cardhitam capitalize hover:bg-tombol hover:text-white"
                                                    >
                                                        Ekskul
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/galeri"
                                        className="lg:hover:text-[#FFB43F ] block rounded-sm px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-cardhitam lg:hover:bg-transparent"
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/artikel"
                                        className="lg:hover:text-[#FFB43F ] block rounded-sm px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-cardhitam lg:hover:bg-transparent"
                                    >
                                        Artikel
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="relative z-10 min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat font-poppins">
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Background image */}
                    <div className="absolute inset-0 bg-[url('../../public/img/general/bg-beranda.webp')] bg-cover bg-center bg-no-repeat"></div>

                    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 text-left lg:py-48">
                        <div className="lg:max-w-1/2 2xl:max-w-3/4">
                            <h1 className="leading-tight font-bold text-white">
                                <span className="block text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">EMPOWER</span>
                                <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                                    YOUR <span className="text-[#FFB43F]">LEADERS</span>
                                </span>
                            </h1>

                            <p className="mb-5 text-lg font-semibold text-white md:mb-10 lg:text-xl 2xl:text-2xl">
                                with the Science of Influence and Performance
                            </p>

                            <p className="mb-8 text-justify text-sm font-extralight text-white lg:text-base 2xl:max-w-3/4">
                                Excellent Team menghadirkan pelatihan transformasional berbasis Neo NLP & Neuro-Semantics — khusus dirancang untuk
                                eksekutif, manajer, dan tim strategis di perusahaan besar.
                            </p>

                            <div className="flex w-full flex-col gap-4 sm:flex-row 2xl:max-w-3/4">
                                <Link
                                    href="/konsultasi"
                                    className="inline-flex w-full items-center justify-center bg-[#FFB43F] px-8 py-3 text-base font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#FFB43F]/90 hover:shadow-lg focus:ring-4 focus:ring-[#FFB43F]/80 focus:outline-none"
                                >
                                    Konsultasi Sekarang
                                </Link>
                                <Link
                                    href="/download"
                                    className="inline-flex w-full items-center justify-center bg-[#FFB43F] px-8 py-3 text-base font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#FFB43F]/90 hover:shadow-lg focus:ring-4 focus:ring-[#FFB43F]/80 focus:outline-none"
                                >
                                    Download Profil
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}
