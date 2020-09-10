
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet prefetch', href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' },
      { href: "/vendor/bootstrap/css/bootstrap.min.css", rel: "stylesheet" },
      { href: "/vendor/font-awesome-4.7.0/css/font-awesome.min.css", rel: "stylesheet" },
      { href: "/vendor/WOW-master/css/libs/animate.css", rel: "stylesheet" },
      { href: "/vendor/slick/slick.css", rel: "stylesheet" },
      { href: "/vendor/slick/slick-theme.css", rel: "stylesheet" },
      { href: "/vendor/fancybox/jquery.fancybox.min.css", rel: "stylesheet" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/jssocials/jssocials.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/jssocials/jssocials-theme-flat.css" },
      { rel: "stylesheet", href: "/css/main.css", rel: "stylesheet" },
    ],
    script: [
      { src: "/vendor/jquery/jquery.js" },
      { src: "/vendor/jssocials/jssocials.min.js" },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js' },
      { src: "/vendor/bootstrap/js/bootstrap.min.js" },
      { src: "/vendor/slick/slick.js" },
      { src: "/vendor/fancybox/jquery.fancybox.min.js" },
      { type: "text/javascript", src: "/js/main.js" },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: ["~/plugins/vee-validate"],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/date-fns',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'page_404',
          path: '*',
          component: resolve(__dirname, 'pages/404.vue')
        },
        {
          name: 'news',
          path: '/tin-tuc/:id/:slug',
          component: resolve(__dirname, 'pages/tin-tuc/index')
        },
        {
          name: 'category',
          path: '/the-loai/:id/:slug',
          component: resolve(__dirname, 'pages/the-loai/index')
        }
      )
    }
  }
}
