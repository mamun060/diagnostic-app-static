import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 max-w-2xl text-center">
        Welcome to MediScan Diagnostics. We are a leading diagnostic service provider offering a full
        range of medical tests and scans. Our mission is to deliver fast, accurate, and affordable
        healthcare diagnostics to all. With modern facilities and a compassionate team, we are committed
        to your health and wellness.
      </p>
      <div className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} MediScan. All rights reserved.
      </div>
    </div>
  )
}
