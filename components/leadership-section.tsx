'use client'
import React from "react";

export default function LeadershipSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
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

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {[
          {
            name: "Pawan Bhati",
            role: "DIRECTOR",
            image: "/pawan_bhati.JPG",
            description: "At The Stellar School, our vision is clear — to build an institution that not only imparts education but creates extraordinary human beings.",
            quote: "TSS is not just a school — it is a space where ideas grow, talents shine, futures are shaped with purpose."
          },{
            name: "Rakesh Bhati",
            role: "Chairman",
            image: "/rakesh_bhati.jpeg",
            description: "A Vision for Excellence, A Commitment to Every Child At The Stellar School, our goal is not only academic success — it is the creation of an ecosystem where children flourish as complete individuals. We have designed this institution to be a launchpad of possibilities — where learning is joyful, sports are celebrated, creativity is encouraged, and each child receives the right platform to identify their strengths.",
            quote: "Our responsibility as a school is not simply to teach but to transform."
          }].map((leader, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-school-accent shadow-xl">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-school-primary text-white px-6 py-2 rounded-full">
                    <span className="text-sm font-semibold">{leader.role}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-school-primary mb-4">{leader.name}</h3>
                <p className="text-school-gray mb-4 leading-relaxed">{leader.description}</p>
                <p className="text-school-gray mb-4 leading-relaxed font-medium italic">{leader.quote}</p>
              </div>
            </div>
          </div>
              ))}
            </div>
          </div>
          <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} className="absolute left-0 top-1/2 -translate-y-1/2 bg-school-primary text-white p-2 rounded-full">←</button>
          <button onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))} className="absolute right-0 top-1/2 -translate-y-1/2 bg-school-primary text-white p-2 rounded-full">→</button>
        </div>
      </div>
    </section>
  );
}
