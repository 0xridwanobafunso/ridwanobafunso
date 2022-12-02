export default {
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Obafunso Ridwan A. - An Outstanding Software Engineer From Nigeria',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I build software that scale using the industry battle-tested engineering principles and approaches. I care a lot about clean code, architecture, performance, testing and many more. Ridwan is always eager to learn new technology stack to improve his knowledge and career.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quantico&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/github.min.css',
      },
    ],
    script: [
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js',
      },
      {
        src: 'https://twemoji.maxcdn.com/v/latest/twemoji.min.js',
        crossorigin: 'anonymous',
      },
      {
        src: '/elevator.min.js',
      },
    ],
  },
  loading: {
    name: 'circle',
    background: '#553c9a',
    color: '#6366F1',
    height: '1px',
    throttle: 0,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'custom-icon.png',
    },
    meta: {
      name: 'Obafunso Ridwan A. CV',
      author: 'Obafunso Ridwan A.',
      theme_color: '#553c9a',
      lang: 'en',
    },
    manifest: {
      name: 'Obafunso Ridwan A. CV',
      short_name: 'Ridwan A. CV',
      lang: 'en',
    },
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.ridwanobafunso.com',
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
