const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|mdx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "webpackFinal": async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@cjds': path.resolve(__dirname, '../src/styles')
        }

      }
    })

    config.module.rules.push({
      test: /\.mdx$/,
      use: ['babel-loader', '@mdx-js/loader'],
    })

    return config
  }
}