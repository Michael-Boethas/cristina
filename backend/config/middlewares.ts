export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "http://localhost:1337"],
          "frame-ancestors": ["'self'", "http://localhost:3000"], // Allow Next.js frontend
          "script-src": ["'self'", "'unsafe-inline'", "http://localhost:1337"],
          "img-src": ["'self'", "data:", "blob:"],
          "media-src": ["'self'", "data:", "blob:"],
        },
      },
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
