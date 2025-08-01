import { ArrowRight } from 'lucide-react';
import React from 'react';

interface Article {
    id: number;
    title: {
        rendered: string;
    };
    date: string;
    link: string;
    featured_media_src_url: string;
    yoast_head_json?: {
        description: string;
    };
}

interface ArticleSectionProps {
    title?: string;
    latestArticles?: Article[];
    limitedArticles?: Article[];
    showMoreUrl?: string;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({
    title = 'Baca Artikel Kami',
    latestArticles = [],
    limitedArticles = [],
    showMoreUrl = 'https://excellentteam.id/artikel/',
}) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });
    };

    const stripHtml = (html: string) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    return (
        <section id="artikel" className="py-16 font-poppins">
            <div className="container mx-auto p-6">
                <div className="mb-10 text-4xl font-bold text-cardhitam uppercase">{title}</div>

                <div className="flex flex-col gap-5 lg:flex-row">
                    {/* Latest Article - Left Side */}
                    <div className="flex-1">
                        {latestArticles.length > 0 ? (
                            latestArticles.slice(0, 1).map((article) => (
                                <div key={article.id}>
                                    <div>
                                        <img src={article.featured_media_src_url} className="mb-5 w-full rounded-3xl" alt="artikel" />
                                    </div>
                                    <div className="text-justify text-xl text-cardhitam">
                                        {article.yoast_head_json?.description
                                            ? stripHtml(article.yoast_head_json.description)
                                            : stripHtml(article.title.rendered)}
                                    </div>
                                    <div className="mt-5">
                                        <a
                                            href={article.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-bold text-headerbanner uppercase hover:underline"
                                        >
                                            Baca Lebih Banyak
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">Tidak ada artikel terbaru yang tersedia saat ini.</p>
                        )}
                    </div>

                    {/* Article Grid - Right Side */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {limitedArticles.length > 0 ? (
                                limitedArticles.map((article) => (
                                    <div key={article.id} className="max-w-screen-sm rounded-3xl bg-white shadow-2xl drop-shadow-2xl">
                                        <img src={article.featured_media_src_url} className="w-full rounded-tl-3xl rounded-tr-3xl" alt="artikel" />
                                        <div className="p-6">
                                            <div className="text-gray-500">{formatDate(article.date)}</div>
                                            <div className="line-clamp-2 text-cardhitam">{stripHtml(article.title.rendered)}</div>
                                            <div className="mt-5">
                                                <a
                                                    href={article.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-bold text-headerbanner uppercase hover:underline"
                                                >
                                                    Baca Lebih Banyak
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center">Tidak ada artikel yang tersedia saat ini.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Show More Link */}
                <div>
                    <a
                        href={showMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-10 flex items-center text-3xl font-bold text-headerbanner uppercase hover:underline md:gap-2 md:text-right lg:justify-end"
                    >
                        <div>Tampilkan Selengkapnya</div>
                        <div>
                            <ArrowRight className="hidden h-20 w-20 md:block" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ArticleSection;
