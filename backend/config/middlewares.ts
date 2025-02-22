export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'frame-ancestors': ["'self'", "http://localhost:3000"], // Allow embedding in iframe from your frontend
          'default-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io'], // Adjust allowed sources
          'media-src': ["'self'", 'data:', 'blob:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io'],
        },
      },
      xframe: 'ALLOWALL', // Allow all iframes (optional, but useful)
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
