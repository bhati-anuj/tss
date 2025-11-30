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
    <section id="contact" className="py-12 lg:py-20 bg-school-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-school-primary p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Register at Stellar</h2>
            <p className="mb-6">
              You can reach us anytime via{" "}
              <a href="mailto:thestellarschool@gmail.com" className="text-school-accent underline">
                thestellarschool@gmail.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 bg-white text-black"
                />
              </div>

              <div>
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="xyz@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 bg-white text-black"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="">
                  Phone number
                </Label>
                <div className="flex gap-2 mt-1">
                  <select className="px-3 py-2 text-black border border-input rounded-md bg-background text-sm">
                    <option>+91</option>
                  </select>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 bg-white text-black"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="">
                  Tell us a little about you...
                </Label>
                <textarea
                  id="message"
                  placeholder="Tell us a little about you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 w-full px-3 py-2 text-black border border-input rounded-md bg-background text-sm min-h-[80px]"
                />
              </div>

              <div>
                <Label className="">PROGRAMS</Label>
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

              <Button type="submit" className="w-full bg-school-primary-light hover:cursor:pointer hover:bg-white hover:text-black text-white">
                Submit
              </Button>
            </form>
          </div>

          <div className="flex justify-center items-center">
            <img src="/tss-logo-3d.svg" alt="TSS Logo" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
