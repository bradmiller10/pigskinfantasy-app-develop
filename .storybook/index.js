import React from "react";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "@/style";
import { brand } from "expo-device";
// Adds controls into the Native storybook view
console.log(process.env.NODE_ENV);

/**
 * This causes issues when running Expo web. Will be resolved once storybook 6.0.0 is released, so for now we remove the
 * on device controls on the web
 *
 * @see https://github.com/storybookjs/react-native/issues/120
 */
if (brand) require("./rn-addons");

// enables knobs for all stories
addDecorator(withKnobs);

// Add our custom Theme Provider as a decorator
addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>);

// import stories
configure(() => {
  require("./stories");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  port: 19001,
  /**
   * When/if we use async storage we need to manually link it here
   *
   * @see https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#react-native-async-storage
   */
  asyncStorage: null,
});

export default StorybookUIRoot;
