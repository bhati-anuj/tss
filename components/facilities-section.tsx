"use client"

import { useState } from "react"

const facilities = [
  {
    id: "academics",
    title: "ACADEMICS",
    subtitle: "AIM TO BE THE BEST DEVELOP",
    image: "/students-studying-classroom-academics.jpg",
  },
  {
    id: "sports",
    title: "SPORTS",
    subtitle: "EXCEL IN SPORTS AND FITNESS",
    image: "/students-playing-sports-field.jpg",
  },
  {
    id: "co-curricular",
    title: "CO-CURRICULAR ACTIVITIES",
    subtitle: "DISCOVER YOUR HIDDEN TALENTS",
    image: "/students-art-music-activities.jpg",
  },
]

export default function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState("academics")

  const activeFacility = facilities.find((f) => f.id === activeTab)

  return (
    <section id="facilities" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-2">OUR FACILITIES</h2>
          <p className="text-school-gray">FACILITIES THAT ASPIRE AND INSPIRE</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {facilities.map((facility) => (
            <button
              key={facility.id}
              onClick={() => setActiveTab(facility.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-colors ${
                activeTab === facility.id
                  ? "bg-school-primary text-white"
                  : "bg-school-light-gray text-school-gray hover:bg-school-primary/10"
              }`}
            >
              {facility.title}
            </button>
          ))}
        </div>

        {/* Active Facility Display */}
        {activeFacility && (
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={activeFacility.image || "/placeholder.svg"}
                alt={activeFacility.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-school-primary/90 to-transparent p-6">
                <h3 className="text-white text-xl md:text-2xl font-bold">{activeFacility.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{activeFacility.subtitle}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
