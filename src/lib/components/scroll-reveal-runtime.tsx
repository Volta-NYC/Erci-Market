"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const revealSelector = [
  ".scroll-reveal",
  ".scroll-reveal-left",
  ".scroll-reveal-right",
  ".scroll-reveal-zoom",
  ".scroll-image-wipe",
  ".reveal-stagger > *",
].join(",")

export default function ScrollRevealRuntime() {
  const pathname = usePathname()

  useEffect(() => {
    const setupObserver = () => {
      if (!("IntersectionObserver" in window)) {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
        elements.forEach((element) => element.classList.add("is-visible"))
        return undefined
      }

      const observed = new WeakSet<Element>()
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

      const observeElements = () => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

        elements.forEach((element) => {
          if (observed.has(element)) return
          element.classList.remove("is-visible")
          observed.add(element)
          observer.observe(element)
        })
      }

      observeElements()

      const mutationObserver = new MutationObserver(observeElements)
      mutationObserver.observe(document.body, { childList: true, subtree: true })

      return () => {
        mutationObserver.disconnect()
        observer.disconnect()
      }
    }

    let cleanup: (() => void) | undefined
    const frame = window.requestAnimationFrame(() => {
      cleanup = setupObserver()
    })

    return () => {
      window.cancelAnimationFrame(frame)
      cleanup?.()
    }
  }, [pathname])

  return null
}
