# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

Technologies used:

React Native
React Navigation
State management with useState

Primary Development Platform
- Primary Platform: [iOS/Android]
- Test Device: [e.g., iPhone 14 Pro/Samsung Galaxy S21]
- OS Version: [e.g., iOS 16.5/Android 13]

Prerequisites
- Node.js (v20)
- npm or yarn

0. Navigate to the root folder:

cd toodler

1. Install dependencies
Just for precaution, we've included two extra installs to avoid errors.

   ```bash
   npm install
   npx expo install @react-navigation/native @react-navigation/stack
   npx expo install @react-native-picker/picker 
   ```

2. Start the app

If you'd like to use a mobile to use the app, make sure you have Expo Go installed for Android.

Make sure you're connected to same network on mobile & device running this command:

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can also just enter 'w' to open the browser version.

3. 
Navigating the app.

You start with a list of pre-made boards. You can click on each board to see which lists are in each board. You can click on the buttons in the top right or bottom right corners to delete or edit the board respectively. You can also scroll down to add a new board with a name, description and an url to an image. You can leave out these details to just get pre-set title and description with no image.

Once you've navigated into a board, you can select a pre-made list and see the included tasks for each list. You can also create a new list and choose a name, description and colour.

Each task in a list can be marked as completed, deleted or edited. Each list can be edited or deleted as well.

You can use the back button in the top left corner of the app to go back to previous pages and versions of the app.