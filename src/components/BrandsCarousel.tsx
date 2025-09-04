'use client'

import { useState, useEffect } from 'react'

export default function BrandsCarousel() {
  // Array de marcas - nombres reales de tus archivos
  const brands = [
    { name: 'Marca 1', logo: '/brands/1.png', alt: 'Marca 1' },
    { name: 'Marca 2', logo: '/brands/2.png', alt: 'Marca 2' },
    { name: 'Marca 3', logo: '/brands/3.png', alt: 'Marca 3' },
    { name: 'Marca 4', logo: '/brands/4.png', alt: 'Marca 4' },
    { name: 'Marca 5', logo: '/brands/5.png', alt: 'Marca 5' },
    { name: 'Marca 6', logo: '/brands/6.png', alt: 'Marca 6' },
    { name: 'Marca 7', logo: '/brands/7.png', alt: 'Marca 7' },
    { name: 'Marca 8', logo: '/brands/8.png', alt: 'Marca 8' },
    { name: 'Marca 9', logo: '/brands/9.png', alt: 'Marca 9' },
    { name: 'Marca 10', logo: '/brands/10.png', alt: 'Marca 10' },
    { name: 'Marca 11', logo: '/brands/11.png', alt: 'Marca 11' },
    { name: 'Marca 12', logo: '/brands/12.png', alt: 'Marca 12' },
    { name: 'Marca 13', logo: '/brands/13.png', alt: 'Marca 13' },
    { name: 'Marca 14', logo: '/brands/14.png', alt: 'Marca 14' },
    { name: 'Marca 15', logo: '/brands/15.png', alt: 'Marca 15' },
  ]

  // Duplicamos el array para crear un loop infinito
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Marcas que <span className="text-red-600">Confían en Nosotros</span>
        </h2>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Trabajamos con las mejores marcas del mercado
        </p>
      </div>

      {/* Carrusel Continuo */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 mx-16 flex items-center justify-center">
              <div className="h-40 w-64 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  className="h-32 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback si la imagen no existe
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbyBNYXJjYTwvdGV4dD4KPC9zdmc+'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
