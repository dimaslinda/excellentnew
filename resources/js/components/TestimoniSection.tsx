import { useEffect, useState } from 'react';

interface TestimoniItem {
    id: number;
    name: string;
    position: string;
    description: string;
    image: string;
    created_at: string;
}

export default function TestimoniSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [testimoniData, setTestimoniData] = useState<TestimoniItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch testimoni data from API
    const fetchTestimoniData = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/testimoni');
            if (!response.ok) {
                throw new Error('Failed to fetch testimoni data');
            }
            const data = await response.json();
            setTestimoniData(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            console.error('Error fetching testimoni data:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1); // mobile
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2); // tablet
            } else {
                setItemsPerSlide(3); // desktop
            }
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);
        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, []);

    // Fetch testimoni data on component mount
    useEffect(() => {
        fetchTestimoniData();
    }, []);

    const totalSlides = Math.ceil(testimoniData.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative z-10 mx-auto max-w-7xl px-4">
            {/* Header */}
            <div className="mb-12 text-start">
                <h2 className="mb-4 text-3xl font-bold text-cardhitam md:text-4xl">Yang Mereka Katakan</h2>
                <h3 className="text-3xl font-bold text-cardhitam md:text-4xl">
                    Tentang <span className="bg-headerbanner px-3 py-1 text-white">EXCELLENT TEAM</span>
                </h3>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-headerbanner"></div>
                    <span className="ml-3 text-gray-600">Memuat testimoni...</span>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-red-700">Gagal memuat testimoni: {error}</p>
                    </div>
                    <button 
                        onClick={fetchTestimoniData}
                        className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                        Coba Lagi
                    </button>
                </div>
            )}

            {/* Navigation Arrows and Testimonial Cards */}
            {!loading && !error && testimoniData.length > 0 && (
                <>
                    {/* Navigation Arrows */}
                    <div className="mb-8 flex justify-end space-x-2">
                        <button
                            onClick={prevSlide}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-headerbanner text-white transition-colors hover:bg-headerbanner/95"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-headerbanner text-white transition-colors hover:bg-headerbanner/95"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {testimoniData.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item) => (
                                    <div
                                        key={item.id}
                                        className="transform rounded-lg border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    >
                                        {/* Profile Image */}
                                        <div className="mb-4 flex justify-center">
                                            <div className="h-20 w-20 overflow-hidden rounded-full">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src =
                                                            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIgMTJDMTQuNzYxNCAxMiAxNyA5Ljc2MTQyIDE3IDdDMTcgNC4yMzg1OCAxNC43NjE0IDIgMTIgMkM5LjIzODU4IDIgNyA0LjIzODU4IDcgN0M3IDkuNzYxNDIgOS4yMzg1OCAxMiAxMiAxMloiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEyIDE0QzguNjg2MjkgMTQgNiAxNi42ODYzIDYgMjBIMThDMTggMTYuNjg2MyAxNS4zMTM3IDE0IDEyIDE0WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4KPC9zdmc+';
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Name and Position */}
                                        <div className="mb-4 text-center">
                                            <h4 className="mb-1 text-xl font-bold text-gray-800">{item.name}</h4>
                                            <p className="text-sm font-medium text-orange-500">{item.position}</p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-justify text-sm leading-relaxed text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                    {/* Progress Indicators */}
                    <div className="mt-8 flex justify-center space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                aria-label={`Goto slide ${index + 1}`}
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1 w-8 rounded transition-colors ${index === currentSlide ? 'bg-headerbanner' : 'bg-gray-300'}`}
                            ></button>
                        ))}
                    </div>
                </>
            )}

            {/* Empty State */}
            {!loading && !error && testimoniData.length === 0 && (
                <div className="text-center py-12">
                    <div className="mx-auto mb-4 h-24 w-24 text-gray-300">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Belum Ada Testimoni</h3>
                    <p className="text-gray-500">Testimoni akan ditampilkan di sini setelah tersedia.</p>
                </div>
            )}
        </div>
    );
}
