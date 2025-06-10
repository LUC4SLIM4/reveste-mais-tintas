"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll instantâneo para o topo
    window.scrollTo(0, 0)

    // Ou se preferir scroll suave, use:
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
  }, [pathname])

  return null
}

export default ScrollToTop
