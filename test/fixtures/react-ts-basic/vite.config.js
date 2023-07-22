const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const viteSSR = require('vite-ssr-unhead/plugin')

// https://vitejs.dev/config/
module.exports = defineConfig({
  ssr: { format: 'cjs' },
  plugins: [
    viteSSR({
      features: {
        // Manually disable features that are
        // detected because this is a mono repo
        reactStyledComponents: false,
        reactApolloRenderer: false,
      },
    }),
    ,
    react(),
  ],
})
