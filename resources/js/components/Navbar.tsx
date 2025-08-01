import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className={`fixed top-0 z-20 w-full bg-transparent ${className}`}>
            <div className="bg-bgnavbar mx-auto flex max-w-screen-xl flex-wrap items-center justify-between rounded-lg border-2 border-navbar bg-[#F4F6FF94]/60 p-4 shadow-xl drop-shadow-xl backdrop-blur-md lg:mt-5 lg:rounded-full lg:px-8">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/img/general/logo.webp" className="h-8 xl:h-10" alt="logo ET" />
                </Link>

                <div className="flex space-x-3 lg:order-2 lg:space-x-0">
                    <a
                        href="https://wa.me/6285213298462"
                        target="_blank"
                        className="cursor-pointer rounded-full bg-tombol px-9 py-2 text-center font-poppins text-sm font-medium text-white capitalize hover:bg-tombol focus:ring-4 focus:ring-navbar focus:outline-none"
                    >
                        Konsultasi
                    </a>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-[#FFB43F] hover:bg-tombol focus:ring-2 focus:ring-tombol focus:outline-none lg:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
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
                                className="block rounded-sm bg-tombol px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-[#FFB43F] lg:hover:bg-transparent lg:hover:text-[#FFB43F]"
                                aria-current="page"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex w-full cursor-pointer items-center justify-between rounded-sm px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-cardhitam lg:hover:bg-transparent lg:hover:text-[#FFB43F]"
                            >
                                Layanan Kami
                                <svg
                                    className="ms-2.5 h-2.5 w-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
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
                                className="block rounded-sm px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-cardhitam lg:hover:bg-transparent lg:hover:text-[#FFB43F]"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/artikel"
                                target="_blank"
                                className="block rounded-sm px-3 py-2 text-white capitalize hover:bg-tombol hover:text-white lg:border-0 lg:bg-transparent lg:text-cardhitam lg:hover:bg-transparent lg:hover:text-[#FFB43F]"
                            >
                                Artikel
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
