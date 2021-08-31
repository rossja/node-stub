module.exports = {
  'apps': [{
    'name': 'testapp',
    'script': '/data/web/testapp/index.js',
    'cwd': '/data/web/testapp',
    'watch': false,
    'env': {
      'NODE_ENV': 'development'
    },
    'env_production': {
      'NODE_ENV': 'production'
    }
  }]
}
