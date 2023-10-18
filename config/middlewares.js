module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      // configure CORS to app;s client side and Strapi client (admin panel)
      // client-side 1: http://localhost:3000
      // client-side 2: http://localhost:8000
      // Strapi client (admin panel): http://localhost:1337
      origin: ['https://api.genialnastrona.pl'], 
    },
  },
});
