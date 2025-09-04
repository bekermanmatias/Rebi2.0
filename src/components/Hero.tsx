'use client'

import { useState } from 'react'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative text-white min-h-screen flex flex-col overflow-hidden">
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
      
      
             {/* Navigation */}
       <nav className="relative z-10 px-6 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
                     <div className="flex items-center">
             <img 
               src="/rebiLogo.png" 
               alt="REBI Construcciones - Especialista en Materiales de Construcción" 
               className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
             />
           </div>
          
                     {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-10">
             <a href="#inicio" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Inicio</a>
             <a href="#productos" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Productos</a>
             <a href="#servicios" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">Servicios</a>
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

                 {/* Mobile Navigation */}
         {isMenuOpen && (
           <div className="md:hidden absolute top-full left-0 right-0 bg-red-600 border-t border-red-500">
             <div className="px-6 py-6 space-y-5">
               <a href="#inicio" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Inicio</a>
               <a href="#productos" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Productos</a>
               <a href="#servicios" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Servicios</a>
               <a href="#contacto" className="block text-white hover:text-yellow-200 transition-colors text-lg font-medium">Contacto</a>
             </div>
           </div>
         )}
      </nav>

      {/* Hero Content */}
      <div className="relative px-6 py-24 lg:px-8 lg:py-32 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
                         <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
               Especialista en
               <span className="block text-yellow-300">Materiales de Construcción</span>
             </h2>
             <p className="mt-6 text-lg leading-8 text-yellow-200 max-w-3xl mx-auto">
              Somos especialistas en materiales de construcción con años de experiencia. Ofrecemos productos de alta calidad, 
              asesoramiento técnico especializado y un servicio personalizado para todos tus proyectos.
            </p>
          </div>
          
                     <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                           <a
                href="#contacto"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-red-200"
              >
                <span className="relative z-10">Solicitar Cotización</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
                           <a
                href="#productos"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10">Ver Productos</span>
                <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
           </div>
        </div>
      </div>

                                                       {/* Background Pattern - Ajustado para video con menor opacidad */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
         </div>
        
                 {/* Floating Elements - Ajustados para video con menor opacidad */}
         <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-pulse shadow-lg"></div>
           <div className="absolute top-40 right-20 w-2 h-2 bg-white/25 rounded-full animate-ping shadow-lg"></div>
           <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/15 rounded-full animate-bounce shadow-lg"></div>
         </div>
    </div>
  )
}
