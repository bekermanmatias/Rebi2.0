export default function Products() {
  const products = [
    {
      name: "Cemento Portland",
      category: "Materiales Básicos",
      description: "Cemento de alta resistencia para todo tipo de construcciones",
      image: "🏗️",
      features: ["Resistencia garantizada", "Certificación ISO", "Disponible en sacos de 50kg"]
    },
    {
      name: "Acero de Construcción",
      category: "Estructuras",
      description: "Varillas de acero corrugado para refuerzo estructural",
      image: "🔩",
      features: ["Grado 60", "Diferentes diámetros", "Cumple normas ASTM"]
    },
    {
      name: "Ladrillos Cerámicos",
      category: "Mampostería",
      description: "Ladrillos de arcilla cocida para muros y divisiones",
      image: "🧱",
      features: ["Alta durabilidad", "Excelente aislamiento", "Múltiples formatos"]
    },
    {
      name: "Arena y Grava",
      category: "Áridos",
      description: "Materiales granulares para hormigón y morteros",
      image: "🏖️",
      features: ["Granulometría controlada", "Lavados y cribados", "Entrega a domicilio"]
    },
    {
      name: "Pinturas Industriales",
      category: "Acabados",
      description: "Pinturas de alta calidad para interiores y exteriores",
      image: "🎨",
      features: ["Resistente a la intemperie", "Bajo VOC", "Múltiples colores"]
    },
    {
      name: "Placas de Yeso",
      category: "Tabiques",
      description: "Placas de yeso para divisiones interiores",
      image: "📋",
      features: ["Fácil instalación", "Excelente acústica", "Resistente al fuego"]
    }
  ]

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Productos Destacados
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Contamos con una amplia gama de materiales de construcción de primera calidad 
            para satisfacer todas las necesidades de tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
                         <div
               key={index}
               className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
             >
               <div className="p-6">
                 <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                 <div className="mb-4">
                                       <span className="inline-block bg-gradient-to-r from-red-100 to-red-200 text-red-800 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                     {product.category}
                   </span>
                 </div>
                                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                   {product.name}
                 </h3>
                 <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                   {product.description}
                 </p>
                 <ul className="space-y-3">
                   {product.features.map((feature, featureIndex) => (
                     <li key={featureIndex} className="flex items-start group/item">
                       <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors duration-300">
                         <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <span className="text-sm text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="px-6 pb-6">
                                   <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                   Solicitar Cotización
                 </button>
               </div>
             </div>
          ))}
        </div>

                 <div className="text-center mt-16">
           <p className="text-gray-600 mb-8 text-lg">
             ¿No encuentras lo que buscas? Contáctanos para productos especiales
           </p>
                       <a
              href="#contacto"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-red-600 border-2 border-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
             <span className="mr-2">Ver Catálogo Completo</span>
             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
             </svg>
           </a>
         </div>
      </div>
    </section>
  )
}
