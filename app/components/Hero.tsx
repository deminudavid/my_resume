"use client";

export default function Hero() {
    const handleDownloadPDF = () => {
        window.print();
    };
    return (
        <header className="w-full absolute">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div>
                            {/* <Logo /> */}
                        </div>

                    
                        <button
                            onClick={handleDownloadPDF}
                            className="downloadButton relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                        >
                            <span className="relative z-10 text-xl font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                Download PDF Resume
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
