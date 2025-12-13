import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <img src="/tss-logo.svg" alt="TSS Logo" className="w-32" />
            <h3 className="font-bold text-school-primary">
              THE STELLAR SCHOOL
            </h3>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 max-w-4xl mx-auto">
          <div>
            <h4 className="font-semibold text-school-primary mb-4">
              About
              <br />
              THE STELLAR SCHOOL
            </h4>
            <p className="text-sm text-school-gray">
              Lorem ipsum dolor amet consectetur adipiscing elit ipsum dolor sit
              amet consectetur adipiscing elit ipsum dolor sit amet consectetur
              adipiscing elit.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-school-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-school-gray">
              <li>
                <a href="#" className="hover:text-school-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-school-primary mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-school-gray">
              <li>
                <a href="#" className="hover:text-school-accent">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Grievance Support
                </a>
              </li>
              <li>
                <a href="/terms_and_conditions" className="hover:text-school-accent">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy_policy" className="hover:text-school-accent">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-school-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-school-gray">
              <li>
                <a href="#" className="hover:text-school-accent">
                  Annual Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Development & Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-school-accent">
                  Parents Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#"
            className="w-10 h-10 bg-school-light-gray rounded-full flex items-center justify-center text-school-primary hover:bg-school-primary hover:text-white transition-colors"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-school-light-gray rounded-full flex items-center justify-center text-school-primary hover:bg-school-primary hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-school-light-gray rounded-full flex items-center justify-center text-school-primary hover:bg-school-primary hover:text-white transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Decorative Lines */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-8 h-1 bg-school-primary rounded-full"></div>
          <div className="w-8 h-1 bg-school-gray rounded-full"></div>
        </div>

        <p className="text-center text-sm text-school-gray">
          © 2025 The Stellar School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
