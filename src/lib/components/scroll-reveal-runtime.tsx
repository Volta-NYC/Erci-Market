"use client"

import { useEffect } from "react"

const revealSelector = [
  ".scroll-reveal",
  ".scroll-reveal-left",
  ".scroll-reveal-right",
  ".scroll-reveal-zoom",
  ".scroll-image-wipe",
  ".reveal-stagger > *",
].join(",")

export default function ScrollRevealRuntime() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return null
}
