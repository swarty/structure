// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public"
  },

  runtimeConfig: {
    // keys which only available on server-side

    public: {
      // keys which also available on client-side
    }
  },

  css: ['/assets/styles/main.scss'],

  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: []
    },
  },

  experimental: {
    inlineSSRStyles: true
  }
});
