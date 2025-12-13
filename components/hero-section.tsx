export default function HeroSection() {
    return (
        <div className="-mx-4 w-full h-screen flex flex-col m-0 p-0 gap-0 overflow-hidden relative">
            {/* Images: 2x2 grid on mobile, 1x4 row on md+ */}
            <div className="grid grid-cols-2 grid-rows-2 flex-1 gap-0 h-1/2 md:flex md:flex-1 md:grid-cols-none md:grid-rows-none md:h-full">
                <img
                    src="/images/hero1.svg"
                    alt="Hero 1"
                    className="object-cover w-full h-full m-0 p-0"
                />
                <img
                    src="/images/hero2.svg"
                    alt="Hero 2"
                    className="object-cover w-full h-full m-0 p-0"
                />
                <img
                    src="/images/hero3.svg"
                    alt="Hero 3"
                    className="object-cover w-full h-full m-0 p-0"
                />
                <img
                    src="/images/hero4.svg"
                    alt="Hero 4"
                    className="object-cover w-full h-full m-0 p-0"
                />
            </div>

            {/* Content Overlay: smaller font on mobile */}
            <div className="absolute bg-black/20 inset-0 flex items-center justify-center flex-col font-serif">
                <div className="bg-black/30 w-full py-4 md:py-8 rounded-lg flex flex-col items-center text-center gap-2">
                    <h1 className="text-lg sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px] bg-white/30 w-full font-normal text-white leading-none">Smart Strong Stellar</h1>
                </div>
                <p className="text-base sm:text-xl md:text-2xl text-white max-w-lg">A world of opportunities</p>
                <button className="mt-2 md:mt-4 px-6 md:px-8 py-2 md:py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-lg">
                    Explore Now
                </button>
            </div>
        </div>
    );
}
