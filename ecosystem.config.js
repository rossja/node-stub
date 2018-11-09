module.exports = {
  "apps": [{
    "name": "onramp",
    "script": "/data/web/onramp/index.js",
    "cwd": "/data/web/onramp",
    "watch": false,
    "env": {
      "NODE_ENV": "development"
    },
    "env_production": {
      "NODE_ENV": "production"
    }
  }]
}