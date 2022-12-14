import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'MomoChill - %s',
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
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/nelson_logo_pri.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/loadFirstData.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify',
      {
        treeShake: true,
        theme: {
          dark: true,
        }
      }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/firebase', {
      config: {
        apiKey: "AIzaSyCSok37fyy0oCoy-kdT-EmXoxcgWIXeTB4",
        authDomain: "momochill-c32e5.firebaseapp.com",
        projectId: "momochill-c32e5",
        storageBucket: "momochill-c32e5.appspot.com",
        messagingSenderId: "675682374854",
        appId: "1:675682374854:web:f24f8453b0d14025e8f3c7"
      },
      services: {
        auth: {
          initialize: {
            onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
          },
        },
        firestore: true
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      common: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDNjODFhZTg0MGRiMDU4YWQ2Y2JmYjE2ZGY2NWM4MSIsInN1YiI6IjYyYzZiNTU0MTJjNjA0MDA0ZjEzMzJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ySyZ9xdd0LmMRCCmASkcAo8NxjaRPGkF7IDOBSbOrlo`
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
