"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    program: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-primary mb-4">Register at Stellar</h2>
            <p className="text-school-gray mb-6">
              You can reach us anytime via{" "}
              <a href="mailto:thestellarschool@gmail.com" className="text-school-accent underline">
                thestellarschool@gmail.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-school-gray">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-school-gray">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="xyz@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-school-gray">
                  Phone number
                </Label>
                <div className="flex gap-2 mt-1">
                  <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
                    <option>+91</option>
                  </select>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-school-gray">
                  Tell us a little about you...
                </Label>
                <textarea
                  id="message"
                  placeholder="Tell us a little about you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-sm min-h-[80px]"
                />
              </div>

              <div>
                <Label className="text-school-gray">PROGRAMS</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {["Pre-Primary", "Primary", "Secondary", "Sports", "Co-Curricular", "Other"].map((prog) => (
                    <label key={prog} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="program"
                        value={prog}
                        checked={formData.program === prog}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="accent-school-primary"
                      />
                      <span className="text-sm text-school-gray">{prog}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full bg-school-primary hover:bg-school-primary-light text-white">
                Submit
              </Button>
            </form>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-school-gold rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-school-gold text-3xl md:text-4xl">✦</div>
                    </div>
                  </div>
                </div>
                {/* Stars decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-school-gold text-lg">★</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-school-gold text-lg">★</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-school-gold text-lg">★</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-school-gold text-lg">★</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-school-primary">THE STELLAR SCHOOL</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
