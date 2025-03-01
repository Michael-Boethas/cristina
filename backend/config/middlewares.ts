export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'frame-ancestors': ["'self'", "http://localhost:3000", "https://cristina-jimenez.netlify.app/"], // Allow embedding in iframe from frontend
          'default-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io'], 
          'media-src': ["'self'", 'data:', 'blob:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io'],
        },
      },
      xframe: 'ALLOWALL', 
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://cristina-jimenez.netlify.app/', 'https://cristina-jimenez-strapi-admin-dashboard.onrender.com/', 'https://gigantic-clareta-cristina-180c122a.koyeb.app/'], 
      credentials: false, 
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
