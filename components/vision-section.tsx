import { Button } from "@/components/ui/button"

export default function VisionSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-school-primary mb-6">
              We are <span className="text-school-accent">STELLAR</span>
            </h1>
            <p className="text-school-gray mb-4 leading-relaxed">
              We are not just learners, we are leaders in the making. At The Stellar School, every child is encouraged
              to discover their inner brilliance and rise to their fullest potential. The word "stellar" means
              exceptional, outstanding, and shining like a star, and that is exactly what we strive to nurture in each
              of our students.
            </p>
            <p className="text-school-gray mb-6 leading-relaxed">
              Because at The Stellar School, we don't just learn to succeed we learn to shine. We are Stellar.
            </p>
            <Button className="bg-school-primary hover:bg-school-primary-light text-white px-8">KNOW MORE →</Button>
          </div>

          <div className="bg-school-light-gray p-6 rounded-lg">
            <p className="text-school-gray leading-relaxed mb-4">
              At The Stellar School, our mission is to ignite the light within every child nurturing their intellects,
              creativity, and character to help them shine as responsible, confident, and compassionate leaders.
            </p>
            <p className="text-school-gray leading-relaxed">
              We aim to create a learning community where excellence meets empathy, and where every learner is
              encouraged to think boldly, act wisely, and lead purposefully in a rapidly changing world. At The Stellar
              School, our mission is to ignite the light within every child nurturing their intellects, creativity, and
              character to help them shine as responsible, confident, and
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
