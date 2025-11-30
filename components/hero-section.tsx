export default function HeroSection() {
    return (
        <div className="-mx-4 w-full  h-screen flex flex-col m-0 p-0 gap-0 overflow-hidden relative">
            {/* Images */}
            <div className="flex flex-1 gap-0 ">
                <img
                    src="/images/hero1.svg"
                    alt="Hero 1"
                    className="flex-1 h-full w-1/4 object-cover m-0 p-0"
                />
                <img
                    src="/images/hero2.svg"
                    alt="Hero 2"
                    className="flex-1 h-full w-1/4 object-cover m-0 p-0"
                />
                <img
                    src="/images/hero3.svg"
                    alt="Hero 3"
                    className="flex-1 h-full w-1/4 object-cover m-0 p-0"
                />
                <img
                    src="/images/hero4.svg"
                    alt="Hero 4"
                    className="flex-1 h-full w-1/4 object-cover m-0 p-0"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute bg-black/20 inset-0 flex items-center justify-center flex-col font-serif">
                <div className="bg-black/30 w-full  py-8 rounded-lg flex flex-col items-center text-center gap-2">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px] bg-white/30 w-full font-normal text-white leading-none">Smart Strong Stellar</h1>
                </div>
                    <p className="text-2xl text-white max-w-lg">A world of opportunities</p>
                    <button className="mt-4 px-8 py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-lg">
                        Explore Now
                    </button>
            </div>
        </div>
    );
}
