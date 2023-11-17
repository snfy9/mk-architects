export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mk-architects',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        },
    ]
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css' ,
    '~/assets/css/transitions.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-masonry', ssr: false }
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts' //追加
  ],
  googleFonts: {
    families: {
      Roboto: [100, 400, 500, 700] //読み込みたいGoogle　Fontsを指定
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes: [
      '/',
      '/bio',
      '/test2',
      '/testindex',
      '/works/myHome'
    ]
  }

}
