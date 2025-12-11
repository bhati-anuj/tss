"use client";

import { useState } from "react";

const facilities = [
  {
    id: "academics",
    title: "Smart Classrooms",
    subtitle: "STATE OF THE ART EDUCATION",
    image: "/classroom.svg",
    data: [
      {
        id: "academics",
        title: "Smart Classrooms",
        subtitle: "STATE OF THE ART EDUCATION",
        image: "/classroom.svg",
      },
      {
        id: "academics",
        title: "Modern Science Labs",
        subtitle: "ENHANCE ENTHUSIASM AND STRENGTH",
        image: "/labs.svg",
      },
      {
        id: "academics",
        title: "Personalised Learning Support",
        subtitle: "CRAFTING FUTURE ARTISTS",
        image: "/personal.svg",
      },
    ],
  },
  {
    id: "sports",
    title: "SPORTS",
    subtitle: "EXCEL IN SPORTS AND FITNESS",
    image: "/students-playing-sports-field.jpg",
    data: [
      {
        id: "sports",
        title: "Cricket Practice Nets & Pitch",
        subtitle: "STATE OF THE ART EDUCATION",
        image: "/sport_cricket.svg",
      },
      {
        id: "sports",
        title: "Football Ground",
        subtitle: "CRAFTING FUTURE ARTISTS",
        image: "/sport_football.svg",
      },
      {
        id: "sports",
        title: "Fitness Zone",
        subtitle: "ENHANCE ENTHUSIASM AND STRENGTH",
        image: "/sport_fitness.svg",
      },
    ],
  },
  {
    id: "co-curricular",
    title: "CO-CURRICULAR ACTIVITIES",
    subtitle: "DISCOVER YOUR HIDDEN TALENTS",
    image: "/students-art-music-activities.jpg",
    data: [
      {
        id: "co-curricular",
        title: "Music & Dance Academy",
        subtitle: "STATE OF THE ART EDUCATION",
        image: "/cc_music.svg",
      },
      {
        id: "co-curricular",
        title: "Public Speaking & Confidence Building Workshops",
        subtitle: "CRAFTING FUTURE ARTISTS",
        image: "/cc_speaking.svg",
      },
      {
        id: "co-curricular",
        title: "School Newsletter & Digital Media Club",
        subtitle: "ENHANCE ENTHUSIASM AND STRENGTH",
        image: "/cc_newsletter.svg",
      },
    ],
  },
];

export default function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState("academics");

  const activeFacility = facilities.find((f) => f.id === activeTab);

  return (
    <section id="facilities" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-2">
            OUR FACILITIES
          </h2>
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
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeFacility &&
          activeFacility.data?.map((item) => (
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-school-primary/90 to-transparent p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
          ))}
            </div>
      </div>
    </section>
  );
}
