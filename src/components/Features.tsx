export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Calidad Garantizada",
      description: "Todos nuestros productos cumplen con los más altos estándares de calidad y certificaciones internacionales."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Precios Competitivos",
      description: "Ofrecemos los mejores precios del mercado sin comprometer la calidad de nuestros productos."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Entrega Rápida",
      description: "Servicio de entrega eficiente y puntual para mantener tus proyectos en tiempo y forma."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Asesoría Técnica",
      description: "Nuestro equipo de expertos te brinda asesoría técnica especializada para cada proyecto."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Atención Personalizada",
      description: "Cada cliente es único. Te brindamos atención personalizada y soluciones a medida."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Amplio Catálogo",
      description: "Contamos con una extensa variedad de productos para cubrir todas tus necesidades de construcción."
    }
  ]

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            En Rebi Construcciones nos destacamos por ofrecer soluciones integrales 
            y un servicio excepcional que supera las expectativas de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
                         <div
               key={index}
                               className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2 cursor-pointer"
             >
                               <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl text-red-600 mb-6 group-hover:scale-110 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg">
                 <div className="group-hover:scale-110 transition-transform duration-300">
                   {feature.icon}
                 </div>
               </div>
                               <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                 {feature.title}
               </h3>
               <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                 {feature.description}
               </p>
               
                               {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
