"use client"

import { useEffect, useRef } from "react"

export default function Marquee({ text, speed = 50 }) {
  const marqueeRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return

    const marqueeWidth = marqueeRef.current.offsetWidth
    const contentWidth = contentRef.current.offsetWidth

    // Only animate if content is wider than container
    if (contentWidth <= marqueeWidth) return

    const duration = contentWidth / speed

    const animation = contentRef.current.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${contentWidth}px)` }],
      {
        duration: duration * 1000,
        iterations: Number.POSITIVE_INFINITY,
      },
    )

    return () => {
      animation.cancel()
    }
  }, [speed, text])

  return (
    <div className="bg-teal-700 py-3 text-white overflow-hidden" ref={marqueeRef}>
      <div className="whitespace-nowrap" ref={contentRef}>
        {text} {/* Duplicate text for seamless looping */}
        {text}
      </div>
    </div>
  )
}
