module.exports = {
  type: 'web-app',
  npm: {
    cjs: false,
    esModules: false,
    umd: false
  },
  polyfill: false,
  webpack: {
    config: function (config) {
      config.entry = {
        demo: ["./src/index.ts"]
      };
      config.resolve.extensions.push(".ts");
      config.module.rules.push({
        "test": /src\/.*\.ts$/,
        "loader": "ts-loader"
      });

      return config;
    }
  }
};
