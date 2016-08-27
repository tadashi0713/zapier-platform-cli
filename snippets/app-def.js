const App = {
  // both version strings are required
  version: require('./package.json').version,
  platformVersion: require('./package.json').dependencies['@zapier/zapier-platform-core'],

  // see "Authentication" section below
  authentication: {
  },

  // see "Making HTTP Requests" section below
  requestTemplate: {
  },
  beforeRequest: [
  ],
  afterResponse: [
  ],

  // See "Resources" section below
  resources: {
  },

  // See "Triggers/Searches/Writes" section below
  triggers: {
  },
  searches: {
  },
  writes: {
  }
};

module.export = App;