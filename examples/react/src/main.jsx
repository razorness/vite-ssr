import App from './App'
import { routes } from './routes'
import viteSSR from 'vite-ssr-unhead'

export default viteSSR(App, { routes }, ({ url, isClient, request }) => {
  // Custom initialization hook
})
