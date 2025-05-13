import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">MediScan Diagnostics</h3>
            <p className="mb-4">
              Your trusted partner for all diagnostic needs with state-of-the-art facilities and expert professionals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-teal-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/centers" className="hover:text-teal-300">
                  Diagnostic Centers
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-teal-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Blood Tests
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  X-Ray
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  MRI Scan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  CT Scan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Ultrasound
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>123 Medical Plaza, Healthcare Avenue, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@mediscan.example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-teal-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} MediScan Diagnostics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
