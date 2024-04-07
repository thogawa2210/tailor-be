export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/import-countries',
        handler: 'country.healthCheck',
        config: {
            auth: false
        }
      },
    ]
  }