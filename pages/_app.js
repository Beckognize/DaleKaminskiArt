import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/index.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      setTimeout(() => {
        window.gtag('config', 'G-CDVQKD1X5H', {
          page_path: url,
        })
      }, 500)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return <Component {...pageProps} />
}

export default MyApp
