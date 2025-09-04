'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Also scroll to top when page is refreshed
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return null
}
