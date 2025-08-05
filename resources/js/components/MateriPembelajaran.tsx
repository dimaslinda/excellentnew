interface MateriItem {
    id: string;
    title: string;
    description: string;
}

interface MateriPembelajaranProps {
    title?: string;
    subtitle?: string;
    items: MateriItem[];
}

export default function MateriPembelajaran({ title = 'Komponen Materi &', subtitle = 'Tujuan Pembelajaran', items }: MateriPembelajaranProps) {
    return (
        <section className="bg-[#efefef] py-16 font-poppins">
            <div className="container mx-auto px-4 text-center">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-cardhitam md:text-4xl">{title}</h2>
                    <h3 className="text-3xl font-bold text-cardhitam md:text-4xl">{subtitle}</h3>
                </div>

                {/* Grid Items */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                            <h4 className="mb-3 text-lg font-bold text-cardhitam">{item.title}</h4>
                            <p className="text-sm leading-relaxed text-cardhitam">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
