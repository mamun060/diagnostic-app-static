import HeroSlider from "@/components/hero-slider"
import Marquee from "@/components/marquee"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Award, Users, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Marquee */}
      <Marquee
        text="🔔 Special health packages available for senior citizens | 20% discount on all tests this month | Now open 24/7 at our main center | Free home sample collection for senior citizens and differently-abled | Book online and get 10% off"
        speed={30}
      />

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Our Diagnostic Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer a comprehensive range of diagnostic services using the latest technology and equipment to ensure
              accurate results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Laboratory Tests",
                description:
                  "Comprehensive blood work, urine analysis, and other lab tests with quick turnaround times.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Imaging Services",
                description:
                  "Advanced imaging including X-rays, CT scans, MRIs, and ultrasounds with expert interpretation.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Cardiac Diagnostics",
                description: "ECG, stress tests, echocardiograms, and other heart-related diagnostic procedures.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Women's Health",
                description:
                  "Specialized tests including mammography, bone density scans, and gynecological screenings.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Health Packages",
                description: "Comprehensive health check-up packages tailored for different age groups and needs.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Home Collection",
                description: "Convenient sample collection services at your doorstep by our trained professionals.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <Link href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">About MediScan Diagnostics</h2>
              <p className="mb-6 text-gray-600">
                With over 15 years of experience, MediScan Diagnostics has been at the forefront of providing accurate,
                reliable, and timely diagnostic services to our patients. Our state-of-the-art facilities and expert
                team of medical professionals ensure that you receive the highest quality of care.
              </p>
              <p className="mb-6 text-gray-600">
                We are committed to making healthcare accessible and convenient for all. With multiple centers across
                the city and home collection services, we bring diagnostic excellence closer to you.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Clock className="mr-3 h-6 w-6 text-teal-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Quick Results</h4>
                    <p className="text-sm text-gray-600">Fast turnaround times for all tests</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="mr-3 h-6 w-6 text-teal-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Accredited</h4>
                    <p className="text-sm text-gray-600">Nationally recognized quality standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-3 h-6 w-6 text-teal-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Expert Team</h4>
                    <p className="text-sm text-gray-600">Qualified medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-teal-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Multiple Locations</h4>
                    <p className="text-sm text-gray-600">Conveniently located centers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="About MediScan" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">What Our Patients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our patients have to say about their experience with MediScan
              Diagnostics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Regular Patient",
                quote:
                  "The staff at MediScan is incredibly professional and caring. I've been going here for all my tests for the past 3 years and have always received prompt and accurate results.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Robert Chen",
                role: "First-time Patient",
                quote:
                  "I was nervous about my first MRI, but the technicians were so kind and explained everything clearly. The facility is clean and modern, and I got my results faster than expected.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Priya Sharma",
                role: "Monthly Check-up Patient",
                quote:
                  "As someone who needs regular blood work, I appreciate the efficiency and care at MediScan. Their home collection service has been a lifesaver during the pandemic.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 text-teal-600">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to book your appointment?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-teal-100">
            Schedule your diagnostic tests today and take a step towards better health. Online booking available 24/7.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="#"
              className="rounded-md bg-white px-6 py-3 font-medium text-teal-700 transition hover:bg-gray-100"
            >
              Book Appointment
            </Link>
            <Link
              href="/centers"
              className="rounded-md border border-white px-6 py-3 font-medium text-white transition hover:bg-teal-600"
            >
              Find a Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
