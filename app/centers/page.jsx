"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import { useState } from "react"

// Sample data for diagnostic centers
const diagnosticCenters = [
  {
    id: 1,
    name: "MediScan Central",
    address: "123 Medical Plaza, Downtown",
    phone: "+1 (555) 123-4567",
    hours: "Open 24/7",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=500",
    services: ["Blood Tests", "X-Ray", "MRI", "CT Scan", "Ultrasound", "ECG"],
    description:
      "Our flagship center with state-of-the-art equipment and a full range of diagnostic services available 24/7. Located in the heart of downtown for easy access.",
  },
  {
    id: 2,
    name: "MediScan North",
    address: "456 Health Avenue, North District",
    phone: "+1 (555) 234-5678",
    hours: "Mon-Sat: 7AM-9PM, Sun: 8AM-6PM",
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=500",
    services: ["Blood Tests", "X-Ray", "Ultrasound", "ECG", "Health Packages"],
    description:
      "Conveniently located in the North District, this center offers most common diagnostic services with ample parking and weekend availability.",
  },
  {
    id: 3,
    name: "MediScan East",
    address: "789 Wellness Road, East Side",
    phone: "+1 (555) 345-6789",
    hours: "Mon-Fri: 8AM-8PM, Sat: 8AM-5PM",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=500",
    services: ["Blood Tests", "X-Ray", "MRI", "Ultrasound", "Women's Health"],
    description:
      "Specializing in women's health diagnostics, our East Side center provides a comfortable and private environment with female technicians available upon request.",
  },
  {
    id: 4,
    name: "MediScan South",
    address: "101 Care Street, South Area",
    phone: "+1 (555) 456-7890",
    hours: "Mon-Sat: 7AM-8PM",
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=500",
    services: ["Blood Tests", "X-Ray", "CT Scan", "Ultrasound", "Cardiac Tests"],
    description:
      "Our South Area center specializes in cardiac diagnostics with the latest equipment for comprehensive heart health assessment and monitoring.",
  },
  {
    id: 5,
    name: "MediScan West",
    address: "202 Health Boulevard, West End",
    phone: "+1 (555) 567-8901",
    hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-5PM",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=500",
    services: ["Blood Tests", "X-Ray", "MRI", "CT Scan", "Ultrasound", "Pediatric Tests"],
    description:
      "Child-friendly environment with specialized pediatric diagnostic services. Our staff is trained to make the experience comfortable for young patients.",
  },
]

export default function DiagnosticCentersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCenters = diagnosticCenters.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.services.some(service =>
      service.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Our Diagnostic Centers</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Find a MediScan diagnostic center near you. All our centers are equipped with modern technology and staffed
            by experienced professionals.
          </p>
          <input
            type="text"
            placeholder="Search by name, address, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" mt-5 w-full max-w-md px-4 py-2 border border-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
          />
        </div>

        <div className="space-y-8">
          {filteredCenters.map((center) => (
            <div key={center.id} className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg">
              <div className="grid md:grid-cols-3">
                <div className="relative h-64 w-full md:h-full">
                  <Image src={center.image || "/placeholder.svg"} alt={center.name} fill className="object-cover" />
                </div>
                <div className="col-span-2 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">{center.name}</h2>
                    <div className="flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-700">
                      <Star className="mr-1 h-4 w-4 fill-current text-yellow-400" />
                      <span>{center.rating}/5</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600">{center.description}</p>

                  <div className="mb-4 grid gap-3 md:grid-cols-2">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-gray-700">{center.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-gray-700">{center.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-gray-700">{center.hours}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 font-semibold text-gray-800">Available Services:</h3>
                    <div className="flex flex-wrap gap-2">
                      {center.services.map((service, index) => (
                        <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href={`#book-${center.id}`}
                      className="rounded-md bg-teal-600 px-4 py-2 text-white transition hover:bg-teal-700"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href={`#directions-${center.id}`}
                      className="rounded-md border border-teal-600 px-4 py-2 text-teal-600 transition hover:bg-teal-50"
                    >
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
