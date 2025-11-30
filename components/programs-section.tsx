const programs = [
  {
    title: "PRE-PRIMARY",
    image: "/kindergarten-children-playing-learning.jpg",
    color: "bg-school-primary",
  },
  {
    title: "PRIMARY",
    subtitle: "NURTURING YOUNG MINDS",
    image: "/primary-school-students-classroom.jpg",
    color: "bg-school-accent",
  },
  {
    title: "SECONDARY",
    image: "/secondary-school-students-studying.jpg",
    color: "bg-school-primary",
  },
  {
    title: "SPORTS",
    image: "/school-sports-activities-athletics.jpg",
    color: "bg-school-accent",
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-12 lg:py-20 bg-school-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-2">OUR SMART PROGRAMS</h2>
          <p className="text-school-gray">ENROLL IN STELLAR WORLD CLASS ENRICHMENT PROGRAMS</p>
        </div>

        {/* Featured Program */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
            <img src="/primary-school-students-happy-classroom-learning.jpg" alt="Primary Program" className="w-full h-48 md:h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-school-accent p-4">
              <h3 className="text-white text-lg md:text-xl font-bold">PRIMARY</h3>
              <p className="text-white/80 text-sm">NURTURING YOUNG MINDS</p>
            </div>
          </div>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute bottom-0 left-0 right-0 ${program.color} p-3`}>
                <h3 className="text-white text-sm md:text-base font-bold">{program.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
