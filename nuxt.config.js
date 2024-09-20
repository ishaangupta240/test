export default {
  // Global page headers
  head: {
    title: 'folio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [],

  // Modules
  modules: [
    '@nuxt/image'  // Add the Nuxt Image module here
  ],

  // Image module configuration
  image: {
    provider: 'vercel',
  },

  // Build Configuration
  build: {}
}
