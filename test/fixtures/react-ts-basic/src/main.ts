// @ts-ignore
import App from './App'
import routes from './routes'
import ssrApp from 'vite-ssr-unhead/react'

export default ssrApp(App, { routes }, (context) => {
  //  data fetching`
})
