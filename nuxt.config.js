export default {
  srcDir: 'src',
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '#四谷ラボ - 誰でも参加自由：未来志向の街のオープンイノベーションラボ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: '#四谷ラボ はいつでも誰でも自由に参加して研究・交流・発信できる未来志向のオープンイノベーションラボです' },
      { hid: 'http-equiv', 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      // ogp
      { hid: 'og:site_name', property: 'og:site_name', content: '四谷ラボ-オープンイノベーションラボラトリ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://428lab.net/' },
      { hid: 'og:title', property: 'og:title', content: '四谷ラボ-未来志向オープンイノベーションラボラトリ' },
      { hid: 'og:description', property: 'og:description', content: '家でも職場でもない第３の仕事場兼遊び場として、知的好奇心と刺激の場・四谷ラボで誰でも自由に参加して研究・交流・発信しよう' },
      { hid: 'og:image', property: 'og:image', content: 'yotsuyalab_8.webp' },
      // ogp:facebook
      { property: 'article:author', content: 'https://www.facebook.com/%E5%9B%9B%E8%B0%B7%E3%83%A9%E3%83%9C-102455797824507/' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // ogp:twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@lab_428' },
      { name: 'twitter:title', content: '四谷ラボ-オープンイノベーションラボラトリ' },
      { name: 'twitter:url', content: 'https://428lab.net/' },
      { name: 'twitter:description', content: '家でも職場でもない第３の仕事場兼遊び場として、知的好奇心と刺激の場・四谷ラボで誰でも自由に参加して研究・交流・発信しよう' },
      { name: 'twitter:image', content: 'yotsuyalab_8.webp' },
      // microdata
      { hid: 'microdata:imagae', itemprop: 'image', content: 'yotsuyalab_8.webp' },
      { hid: 'microdata:name', itemprop: 'name', content: '四谷ラボ-オープンイノベーションラボラトリ' },
      { hid: 'microdata:description', itemprop: 'description', content: '家でも職場でもない第３の仕事場兼遊び場として、知的好奇心と刺激の場・四谷ラボで誰でも自由に参加して研究・交流・発信しよう' },
      // GEO
      { name: 'ICBM', content: '35.687040,139.725100' },
      { name: 'geo.position', content: '35.687040,139.725100' },
      { name: 'geo.placename', content: '日本(Japan)東京都 (Tōkyō-to)新宿区四谷' },
      { name: 'geo.region', content: 'JP-13' },
    ],
    link: [
      { rel: 'preconnect', href: 'kit-free.fontawesome.com' },
      { rel: 'preconnect', href: 'connpass.com' },
      { rel: 'preconnect', href: 'blog.428lab.net' },
      { rel: 'preconnect', href: 'www.google.com' },
      { rel: 'preconnect', href: 'maps.google.com' },
      { rel: 'preconnect', href: 'maps.googleapis.com' },
      { rel: 'preconnect', href: 'maps.gstatic.com' },
      { rel: 'preconnect', href: 'fonts.googleapis.com' },
      { rel: 'preconnect', href: 'khms0.googleapis.com' },
      { rel: 'preconnect', href: 'fonts.gstatic.com' },

      { rel: 'dns-prefetch', href: 'kit-free.fontawesome.com' },
      { rel: 'dns-prefetch', href: 'connpass.com' },
      { rel: 'dns-prefetch', href: 'blog.428lab.net' },
      { rel: 'dns-prefetch', href: 'www.google.com' },
      { rel: 'dns-prefetch', href: 'maps.google.com' },
      { rel: 'dns-prefetch', href: 'maps.googleapis.com' },
      { rel: 'dns-prefetch', href: 'maps.gstatic.com' },
      { rel: 'dns-prefetch', href: 'fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'khms0.googleapis.com' },
      { rel: 'dns-prefetch', href: 'fonts.gstatic.com' },
      // favicons
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svgz', sizes: 'any' },
      { rel: 'icon alternate', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon alternate', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon alternate', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: "https://kit.fontawesome.com/18956ba71f.js", crossorigin: "anonymous" }
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
    baseURL: process.env.BASE_URL
  },
  proxy: {
    '/api': {
      target: 'https://lab-website-develop-f0781.web.app'
    }
  },
  /*
   ** Build configuration
   */
  buildDir: process.env.DEV ? '.nuxt' : './functions/nuxt',
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
