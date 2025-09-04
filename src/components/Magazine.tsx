'use client'

export default function Magazine() {
  return (
    <section id="revista" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestra <span className="text-red-600">Revista Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las últimas tendencias en construcción, nuevos productos y proyectos destacados
          </p>
        </div>

        {/* Magazine Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Magazine Preview */}
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-8 lg:p-12">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">REBI Construcciones</h3>
                <p className="text-red-100 text-lg mb-6">
                  Revista especializada en materiales de construcción
                </p>
                
                {/* Magazine Cover Preview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm">Edición Actual</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center text-white/90">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Nuevos productos y materiales</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Proyectos destacados</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Consejos técnicos especializados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Magazine Viewer */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Lee nuestra revista digital
                </h4>
                <p className="text-gray-600">
                  Accede a contenido exclusivo y actualizado
                </p>
              </div>

              {/* Magazine Embed */}
              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <div className="aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://heyzine.com/flip-book/ced1db3017.html#page/1"
                    className="w-full h-full border-0"
                    title="REBI Construcciones - Revista Digital"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href="https://heyzine.com/flip-book/ced1db3017.html#page/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver Revista Completa
                </a>
                
                <a
                  href="#contacto"
                  className="w-full border-2 border-red-600 text-red-600 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Suscribirse a la Revista
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
