'use client'

import { useState, useEffect } from 'react'

export default function Location() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const locations = [
    {
      id: 1,
      title: "Sede Principal",
      address: "Av. Hoyos Rubio Nro. 872",
      district: "Urb. Horacio Zevallos",
      city: "Cajamarca",
      phone: "+51 999 999 999",
      hours: "Lun - Vie: 8:00 AM - 6:00 PM"
    },
    {
      id: 2,
      title: "Sede Secundaria", 
      address: "Jr. Mártires de Uchuraccay Nro. 2482",
      district: "",
      city: "Cajamarca",
      phone: "+51 999 999 999",
      hours: "Lun - Vie: 8:00 AM - 6:00 PM"
    }
  ]

  return (
    <section id="ubicacion" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(244, 192, 18, 0.8) 0%, rgba(244, 192, 18, 0.6) 50%, rgba(244, 192, 18, 0.4) 100%)' }}>
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}></div>
      </div>
      
      {/* Degradado diagonal adicional */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
      
      {/* Overlay para suavizar transición */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/40"></div>
      
      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Partícula 1 */}
        <div 
          className="absolute w-4 h-4 bg-white/40 rounded-full animate-pulse shadow-lg"
          style={{
            left: '10%',
            top: `${20 + (scrollY * 0.1) % 60}%`,
            animationDelay: '0s',
            animationDuration: '3s'
          }}
        ></div>
        
        {/* Partícula 2 */}
        <div 
          className="absolute w-6 h-6 bg-white/35 rounded-full animate-pulse shadow-lg"
          style={{
            left: '25%',
            top: `${40 + (scrollY * 0.15) % 50}%`,
            animationDelay: '1s',
            animationDuration: '4s'
          }}
        ></div>
        
        {/* Partícula 3 */}
        <div 
          className="absolute w-3 h-3 bg-white/50 rounded-full animate-pulse shadow-lg"
          style={{
            left: '60%',
            top: `${15 + (scrollY * 0.08) % 70}%`,
            animationDelay: '2s',
            animationDuration: '2.5s'
          }}
        ></div>
        
        {/* Partícula 4 */}
        <div 
          className="absolute w-5 h-5 bg-white/38 rounded-full animate-pulse shadow-lg"
          style={{
            left: '80%',
            top: `${35 + (scrollY * 0.12) % 45}%`,
            animationDelay: '0.5s',
            animationDuration: '3.5s'
          }}
        ></div>
        
        {/* Partícula 5 */}
        <div 
          className="absolute w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg"
          style={{
            left: '45%',
            top: `${60 + (scrollY * 0.09) % 40}%`,
            animationDelay: '1.5s',
            animationDuration: '2s'
          }}
        ></div>
        
        {/* Partícula 6 */}
        <div 
          className="absolute w-4 h-4 bg-white/32 rounded-full animate-pulse shadow-lg"
          style={{
            left: '70%',
            top: `${25 + (scrollY * 0.11) % 55}%`,
            animationDelay: '2.5s',
            animationDuration: '4.5s'
          }}
        ></div>
        
        {/* Partícula 7 */}
        <div 
          className="absolute w-3 h-3 bg-white/42 rounded-full animate-pulse shadow-lg"
          style={{
            left: '15%',
            top: `${55 + (scrollY * 0.13) % 35}%`,
            animationDelay: '3s',
            animationDuration: '3.2s'
          }}
        ></div>
        
        {/* Partícula 8 */}
        <div 
          className="absolute w-5 h-5 bg-white/36 rounded-full animate-pulse shadow-lg"
          style={{
            left: '85%',
            top: `${45 + (scrollY * 0.07) % 50}%`,
            animationDelay: '1.2s',
            animationDuration: '2.8s'
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-white/30 mx-auto mb-4 rounded-full"></div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">
              Nuestras <span className="text-red-600 drop-shadow-md relative">
                Ubicaciones
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600/50 rounded-full"></div>
              </span>
            </h2>
            <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto drop-shadow-md font-semibold leading-relaxed">
            Encontranos en nuestras sedes estratégicamente ubicadas en Cajamarca
          </p>
        </div>

        {/* Locations with Maps */}
        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="group h-full">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 overflow-hidden h-full flex flex-col group-hover:scale-[1.02] group-hover:-translate-y-2" style={{ borderColor: 'rgba(244, 192, 18, 0.4)' }}>
                {/* Location Header */}
                <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="flex items-center relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{location.title}</h3>
                      <p className="text-red-100 text-sm font-medium">{location.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-64 flex-shrink-0">
                  <iframe
                    src={location.id === 1 
                      ? "https://maps.google.com/maps?q=Av.+Hoyos+Rubio+Nro.+872+Urb.+Horacio+Zevallos+Cajamarca&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      : "https://maps.google.com/maps?q=Jr.+Mártires+de+Uchuraccay+Nro.+2482+Cajamarca&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    }
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.title} - REBI Construcciones`}
                  />
                </div>

                {/* Location Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-semibold">{location.address}</p>
                        {location.district && (
                          <p className="text-gray-600">{location.district}</p>
                        )}
                        <p className="text-gray-600">{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-gray-700">{location.phone}</p>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700">{location.hours}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.district}, ${location.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl w-full justify-center mt-auto overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    <svg className="w-5 h-5 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="relative z-10">Ver en Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
