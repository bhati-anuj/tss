export default function LeadershipSection() {
  return (
    <section className="py-12 lg:py-20 bg-school-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-2">
            OUR LEADERSHIP
          </h2>
          <p className="text-school-accent italic">
            SHAPING FUTURE MINDS WITH EXCELLENCE
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-school-accent shadow-xl">
                <img
                  src="/director_photo2.svg"
                  alt="Director Vaishali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-school-primary text-white px-6 py-2 rounded-full">
                <span className="text-sm font-semibold">DIRECTOR</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-school-primary mb-4">
              VAISHALI
            </h3>
            <p className="text-school-gray mb-4 leading-relaxed">
              At The Stellar School, our vision is clear — to build an
              institution that not only imparts education but creates
              extraordinary human beings.In an era defined by rapid change, it
              is essential that our children grow as thinkers, innovators, and
              compassionate leaders.
            </p>

            <p className="text-school-gray mb-4 leading-relaxed font-medium italic">
              TSS is not just a school — it is a space where ideas grow, talents
              shine, futures are shaped with purpose.
            </p>
            <p className="text-school-gray leading-relaxed">
              Together, we aim to create a generation capable of leading the
              world with wisdom, empathy, courage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
