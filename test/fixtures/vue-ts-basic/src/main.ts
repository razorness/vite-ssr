import App from './App.vue'
import routes from './routes'
import ssrApp from 'vite-ssr-unhead/vue'

export default ssrApp(App, { routes }, (context) => {
  //  data fetching`
})
