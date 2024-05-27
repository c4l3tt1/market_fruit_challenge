import { useEffect, useState } from 'react'

interface WindowDimensions {
  width: number | null
  height: number | null
}

function getWindowDimensions(): WindowDimensions {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }
  return {
    width: null,
    height: null,
  }
}

export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: null,
    height: null,
  })

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions(getWindowDimensions())

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}
