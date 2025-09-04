'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ease-in-out rounded-2xl px-6 py-4 shadow-2xl relative overflow-hidden ${
          isScrolled 
            ? 'bg-red-600/90 backdrop-blur-md border border-red-500/40' 
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {/* Glassmorphism Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shine"></div>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#inicio" className="transition-transform duration-300 hover:scale-105">
                <img 
                  src="/rebiLogo.png" 
                  alt="REBI Construcciones - Especialista en Materiales de Construcción" 
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Inicio</a>
              <a href="#productos" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Productos</a>
              <a href="#servicios" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Servicios</a>
              <a href="#revista" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Revista</a>
              <a href="#ubicacion" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Ubicación</a>
              <a href="#contacto" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Contacto</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-6 right-6 mt-2 backdrop-blur-md rounded-2xl shadow-2xl transition-all duration-1000 ease-in-out ${
          isScrolled 
            ? 'bg-red-600/90 border border-red-500/40' 
            : 'bg-white/10 border border-white/20'
        }`}>
          <div className="px-6 py-6 space-y-5">
            <a href="#inicio" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Inicio</a>
            <a href="#productos" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Productos</a>
            <a href="#servicios" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Servicios</a>
            <a href="#revista" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Revista</a>
            <a href="#ubicacion" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Ubicación</a>
            <a href="#contacto" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  )
}
