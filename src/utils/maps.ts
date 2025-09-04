// Coordenadas aproximadas de Cajamarca, Perú
const CAJAMARCA_CENTER = {
  lat: -7.1617,
  lng: -78.5006
}

// Función para generar enlace de Google Maps embed
export function generateMapsEmbedUrl(address: string, lat?: number, lng?: number) {
  const baseUrl = "https://www.google.com/maps/embed/v1/place"
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY" // Necesitarás una API key
  
  if (lat && lng) {
    return `${baseUrl}?key=${apiKey}&q=${lat},${lng}`
  }
  
  // Fallback: usar la dirección como texto
  return `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(address)}`
}

// Función para generar enlace directo a Google Maps
export function generateMapsUrl(address: string, lat?: number, lng?: number) {
  if (lat && lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`
  }
  
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

// Coordenadas aproximadas de las ubicaciones (necesitarás las coordenadas exactas)
export const locations = {
  sedePrincipal: {
    address: "Av. Hoyos Rubio Nro. 872, Urb. Horacio Zevallos, Cajamarca",
    // Coordenadas aproximadas - necesitas las exactas
    lat: -7.1617,
    lng: -78.5006
  },
  sedeSecundaria: {
    address: "Jr. Mártires de Uchuraccay Nro. 2482, Cajamarca",
    // Coordenadas aproximadas - necesitas las exactas
    lat: -7.1617,
    lng: -78.5006
  }
}

