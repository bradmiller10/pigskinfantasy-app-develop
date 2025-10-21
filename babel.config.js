module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          whitelist: ["API_ENDPOINT", "API_TOKEN"],
        },
      ],
      ["styled-components", { ssr: true }],
    ],
  };
};
