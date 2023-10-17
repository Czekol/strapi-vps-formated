module.exports = ({ env }) => ({
  url: 'https://api.genialnastrona.pl',
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
