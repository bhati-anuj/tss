export default function OpportunitiesSection() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-school-primary rounded-full hidden lg:block"></div>
            <div className="bg-school-primary text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-school-primary font-bold text-xs">TSS</span>
                </div>
                <span className="font-semibold">NOTICE BOARD</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-school-accent">•</span>
                  <span>
                    Assess briefly, celebratory future-focused session, science exhibits, and eco-warriors monthly
                    activities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-school-accent">•</span>
                  <span>Our students attended the National Sports tournament and brought laurels to the school</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-school-accent">•</span>
                  <span>Zonal Leadership honours to the school</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-6">
              WORLD OF
              <br />
              OPPORTUNITIES.
            </h2>
            <p className="text-school-gray mb-4 leading-relaxed">
              "Stellar" means bright, ambitious, future-focused community believes in building character, foster
              mindset, sparking creativity and charting galaxies of potential in every young soul were learning goes
              beyond grades.
            </p>
            <p className="text-school-gray leading-relaxed">
              "Tag Line" - It's more than a catchy slogan — it's a message that communicates who you are, what you
              believe in and what sets you apart. It is a source of josh that can Fuels the School Spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
