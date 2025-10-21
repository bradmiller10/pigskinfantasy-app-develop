const IS_STORYBOOK = process.env.STORYBOOK;

module.exports = {
  expo: {
    name: "Pigskin Fantasy U",
    description: "",
    slug: "pigskinfantasyu",
    owner: "pfu",
    privacy: "unlisted",
    entryPoint: IS_STORYBOOK ? ".storybook/index.js" : "src/index.ts",
    version: "0.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    notification: {
      iosDisplayInForeground: true,
      androidMode: "collapse",
      androidCollapsedTitle: "#{unread_notifications} new notifications",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.pigskinfantasyu.app",
    },
    android: {
      package: "com.pigskinfantasyu.app",
      useNextNotificationsApi: true,
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#FFFFFF",
      },
      permissions: [],
    },
  },
};
