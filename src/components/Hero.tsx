'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    setIsLoaded(true)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div id="inicio" className="relative text-white min-h-screen flex flex-col overflow-hidden font-rubik">
             {/* Video Background */}
       <video
         autoPlay
         loop
         muted
         playsInline
         className="absolute inset-0 w-full h-full object-cover"
         preload="metadata"
       >
         <source src="/rebiVideo2k.mp4" type="video/mp4" />
       </video>
      
             {/* Overlay con gradiente y blur reducido */}
       <div className="absolute inset-0 bg-gradient-to-br from-red-600/70 via-red-500/60 to-yellow-500/50 backdrop-blur-[1px] transition-opacity duration-1000"></div>
       
             {/* Overlay adicional para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Hero Content */}
      <div className="relative px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32 flex-1 flex items-center justify-start">
        <div className="max-w-7xl mx-auto text-left pl-0 -lg:pl-10">
                            <div className="mb-8">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl font-rubik">
                      Especialista en
                      <span className="block text-yellow-300">Materiales de Construcción</span>
                    </h2>
             <p className="mt-6 text-xl sm:text-2xl lg:text-3xl leading-relaxed text-yellow-200 max-w-4xl font-medium">
             No dudes en contactarnos.
            </p>
          </div>
          
                               <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-red-200 overflow-hidden"
            >
              <span className="relative z-10">Solicitar Cotización</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="#productos"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Ver Productos</span>
              <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>

                                                             {/* Interactive Cursor Effects */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      >
        <div className="w-48 h-48 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Geometric Shapes - SVG */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-20 left-10 w-16 h-16 text-white/10 animate-spin" style={{ animationDuration: '20s' }}>
          <polygon points="8,2 14,8 8,14 2,8" fill="currentColor" />
        </svg>
        <svg className="absolute top-40 right-20 w-12 h-12 text-yellow-300/20 animate-pulse">
          <circle cx="6" cy="6" r="4" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-40 left-20 w-20 h-20 text-red-400/15 animate-bounce" style={{ animationDuration: '3s' }}>
          <rect x="2" y="2" width="12" height="12" fill="currentColor" transform="rotate(45 8 8)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[0.5px]"></div>
    </div>
  )
}
