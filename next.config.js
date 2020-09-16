const withPlugins = require('next-compose-plugins');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const withSass = require('@zeit/next-sass');

const plugins = [
  withSass,
];

module.exports = withSass({
  /* config options here */
})

module.exports = withPlugins(plugins, {
  webpack(config, { isServer }) {
    config.plugins = config.plugins || [];

    config.module.rules.push({
      test: /\.test.js$/,
      loader: 'ignore-loader'
    });

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env.local'),
        safe: true,
        systemvars: true
      })
    ];

    return config;
  }
});

