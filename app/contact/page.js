import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
    <p className="text-gray-600 mb-6 text-center max-w-md">
      Have questions? Reach out to us using the details below or send us a message.
    </p>

    <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
      <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
      <p className="text-gray-700 mb-2"><strong>Email:</strong> support@mediscan.com</p>
      <p className="text-gray-700"><strong>Address:</strong> 123 Medical Plaza, Downtown</p>
    </div>

    <div className="mt-8 text-gray-500 text-sm">
      We'll get back to you within 24 hours.
    </div>
  </div>
  )
}
