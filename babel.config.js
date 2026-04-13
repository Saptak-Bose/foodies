module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@features": "./src/features",
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@styles": "./src/styles",
            "@services": "./src/services",
            "@states": "./src/states",
            "@utils": "./src/utils",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
