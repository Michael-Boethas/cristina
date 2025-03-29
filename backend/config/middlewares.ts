export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'frame-ancestors': ["'self'", "http://localhost:3000", "https://cristina-jimenez.netlify.app/", "https://cristina-jimenez.vercel.app/"],
          'default-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io'],
          'media-src': ["'self'", 'data:', 'blob:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io'],
        },
      },
      permissionsPolicy: {
        'geolocation': "'none'",
        'microphone': "'none'",
        'camera': "'none'",
      },
      xframe: 'ALLOWALL',
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://cristina-jimenez.netlify.app',
        'https://cristina-jimenez.vercel.app/',
        'https://cristina-jimenez-strapi-admin-dashboard.onrender.com',
      ],
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

