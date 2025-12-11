const programs = [
  {
    title: "PRIMARY",
    image: "/primary.svg",
    color: "bg-school-primary",
  },
  {
    title: "SPORTS",
    subtitle: "NURTURING YOUNG MINDS",
    image: "/sports.svg",
    color: "bg-school-accent",
  },
  {
    title: "SECONDARY",
    image: "/secondary.svg",
    color: "bg-school-primary",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-12 lg:py-20 bg-school-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-2">
            OUR SMART PROGRAMS
          </h2>
          <p className="text-school-gray">
            ENROLL IN STELLAR WORLD CLASS ENRICHMENT PROGRAMS
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-4 
                md:grid-cols-3 md:grid-rows-2 md:gap-2 justify-items-center"
        >
          {/* Featured Program */}
          <div className="md:row-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src="/pre_primary.svg"
                alt="Primary Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-school-accent p-4">
                <h3 className="text-white text-lg md:text-xl font-bold">
                  PRE-PRIMARY
                </h3>
                <p className="text-white/80 text-sm">NURTURING YOUNG MINDS</p>
              </div>
            </div>
          </div>

          {/* Program Cards */}
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg group cursor-pointer 
        ${
          index === 0
            ? "md:col-start-2 md:row-start-1"
            : index === 1
            ? "md:col-start-3 md:row-start-1 md:row-span-2"
            : index === 2
            ? "md:col-start-2 md:row-start-2"
            : "md:col-start-4 md:row-start-1"
        }`}
            >
              <img
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 ${program.color} p-3`}
              >
                <h3 className="text-white text-sm md:text-base font-bold">
                  {program.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
