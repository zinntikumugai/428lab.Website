export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: '四谷ラボ - 技術者のコミュニティ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // { hid: 'description', name: 'description', content: 'Shinoのプロフィールページ。自己紹介、職務経歴、趣味等。また、過去の制作物などのご紹介' },
      // { hid: 'og:site_name', property: 'og:site_name', content: 'Shinohara.' },
      // { hid: 'og:type', property: 'og:type', content: 'website' },
      // { hid: 'og:url', property: 'og:url', content: 'https://shino3.net/' },
      // { hid: 'og:title', property: 'og:title', content: 'Shinohara.' },
      // { hid: 'og:description', property: 'og:description', content: 'Shinoのプロフィールページ。自己紹介、職務経歴、趣味等。また、過去の制作物などのご紹介' },
      // { hid: 'og:image', property: 'og:image', content: 'https://shino3.net/favicon.ico' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/font.css',
    '@/assets/css/color.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // proxy: true,
    baseURL: "/"
  },
  proxy: {
    '/connpass': {
      target: 'https://connpass.com',
      pathRewrite: {
        '^/connpass': ''
      }
    },
    '/blog': {
      target: 'https://blog.428lab.net',
      pathRewrite: {
        '^/blog': ''
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
