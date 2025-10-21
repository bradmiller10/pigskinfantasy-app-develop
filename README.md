## Contributing

### Local Development

1. Ensure Emulaters are configured and opened

- [iOS Setup](https://docs.expo.io/workflow/ios-simulator/)
- [Android Setup](https://docs.expo.io/workflow/android-studio-emulator/)

2. Run `npm install`

3. Determine appropriate command for the device you want to test

```bash
# Android
$ npm run storybook:android

# iOS
$ npm run storybook:ios

# Web (Note: We have to run two commands in two terminal windows)
# This is an issue that will be fixed in storybook v6.0.0
# See: https://github.com/storybookjs/react-native/issues/120)
$ npm run storybook
$ npm run storybook:web
```

4. Go Nuts

_To test in non-storybook mode use the following commands_

```bash
# Android
$ npm run android

# iOS
$ npm run ios

# Web
$ npm run web
```

### Adding a Component with Storybook

1. Determine if it is an atom, molecule, or organism. [Docs](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)

2. Create a folder for your component using _kebab-case_

3. Create a styles and stories file

4. Link your story file in [storybook/stories/index.js](./storybook/stories/index.js)

5. Navigate to your new component in storybook
