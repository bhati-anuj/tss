import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              We are not just learners, we are leaders in the making. At The
              Stellar School, every child is encouraged to discover their inner
              brilliance and rise to their fullest potential. The word "stellar"
              means exceptional, outstanding, and shining like a star, and that
              is exactly what we strive to nurture in each of our students.
            </p>
            <p className="text-school-gray mb-6 leading-relaxed">
              Because at The Stellar School, we don't just learn to succeed we
              learn to shine. We are Stellar.
            </p>
            <Button className="bg-school-primary hover:bg-school-primary-light text-white px-8">
              KNOW MORE →
            </Button>
          </div>

          <div>
            <Tabs defaultValue="mission" className="flex gap-4 mb-6 border-b border-gray-200">
              <TabsList className="flex gap-2 w-[100%]">
                <TabsTrigger value="mission" className="px-4 py-2 font-semibold data-[state=active]:bg-school-primary data-[state=active]:text-white data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-school-primary">MISSION</TabsTrigger>
                <TabsTrigger value="vision" className="px-4 py-2 font-semibold data-[state=active]:bg-school-primary data-[state=active]:text-white data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-school-primary">VISION</TabsTrigger>
              </TabsList>
              <TabsContent value="mission">
              <div className="bg-school-light-gray p-6 rounded-lg">
              <p className="text-school-gray leading-relaxed mb-4">
                At The Stellar School, our mission is to ignite the light within
                every child nurturing their intellects, creativity, and
                character to help them shine as responsible, confident, and
                compassionate leaders.
              </p>
              <p className="text-school-gray leading-relaxed">
                We aim to create a learning community where excellence meets
                empathy, and where every learner is encouraged to think boldly,
                act wisely, and lead purposefully in a rapidly changing world.
              </p>
            </div>
              </TabsContent>
              <TabsContent value="vision">
              <div className="bg-school-light-gray p-6 rounded-lg">
              <p className="text-school-gray leading-relaxed mb-4">
                Leadership: We inspire our students to lead with confidence,
                integrity, and responsibility not just in the classroom, but in
                life. Excellence: We believe in setting high standards and
                encouraging every child to reach their personal best in
                academics, sports, and character. Curiosity: We cultivate a love
                for learning through exploration, innovation, and imagination.
              </p>
              {/* <p className="text-school-gray leading-relaxed">
                Integrity: We uphold honesty, respect, and ethical behavior as
                the foundation of every action and decision. Compassion: We
                foster empathy and kindness, encouraging our students to make a
                positive difference in their communities. Resilience: We teach
                our students to rise after every fall, embrace challenges, and
                turn them into opportunities for growth.
              </p> */}
            </div>
              </TabsContent>
            </Tabs>

          
          </div>
        </div>
      </div>
    </section>
  );
}
