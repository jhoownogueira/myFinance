const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/unpkg\.com\/phosphor-icons/, // Adicione o padrão de URL dos ícones Phosphor
      handler: 'CacheFirst',
      options: {
        cacheName: 'phosphor-icons',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
        },
      },
    },
    {
      urlPattern: /^https?:\/\/.*\.(woff)/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'other-webfonts',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /^http:\/\/localhost/, // Adicione o padrão de URL do localhost
      handler: 'CacheFirst',
      options: {
        cacheName: 'localhost-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 1 dia
        },
      },
    },
    {
      urlPattern: /^https:\/\/.*\.(png|jpg|jpeg|svg|gif)/, // Adicione aqui o padrão de URL das imagens
      handler: 'CacheFirst',
      options: {
        cacheName: 'image-cache',
        expiration: {
          maxEntries: 6000,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
        },
      },
    },

    // Outras configurações de cache, se necessário
  ],
})

module.exports = withPWA({
  images: {
    domains: ['lh3.googleusercontent.com'],
  }
})