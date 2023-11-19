# Final-Project-UI-UX

## Requirements

To use Expo, you need to have the following tools installed on your machine:

- [Node.js LTS Release](https://nodejs.org/en/) - Only Node.js LTS releases (even-numbered) are recommended.

  As Node.js [officially states](https://nodejs.org/en/about/releases/), "Production applications should only use Active LTS or Maintenance LTS releases". You can install Node.js using a version management tool (such as `nvm` or `volta` or any other of your choice) to switch between different Node.js versions.

- [Git](https://git-scm.com/) for source control.

## Getting Started

### Installing Expo CLI

Use `npm` to install the Expo CLI command line utility:

```sh
npm install -g expo-cli
```

### Cloning the Repository

1. Navigate to the directory you would like to clone the repository into using commands like:
    - `cd`: to change your working directory
    - 'cd ..': to "go back" a level in your directory tree 
2. Next, clone the remote repository and create a local copy on your machine using this command:

   ```sh
   git clone https://github.com/davinjason09/Final-Project-UI-UX
   ```

3. Now you can see the contents of the remote repository on your machine by moving into the newly cloned directory:
   
   ```sh
   cd Final-Project-UI-UX

   # For Windows
   dir

   # For MacOS and Linux
   ls -l

### Installing Dependencies

In the project directory, run this following command to install all the dependencies needed from the terminal"

```sh
npm install
```

### Running the App

In the project directory, run the following command to start a development server from the terminal:

```sh
npx expo start
```

Once the development server is running, it will looks like something like this:

![](https://fullstackopen.com/static/e62bb0656434a7653cc59a0a4f720d62/5a190/25new.png)

The easiest way to launch the app is on a physical device with Expo Go. For more information, see [Open app on a device](https://docs.expo.dev/get-started/create-a-project#open-the-app-on-your-device).

Once it is running on all platforms, the project should look like this:

![](https://docs.expo.dev/static/images/tutorial/01-app-running-on-all-platforms.jpg)

The text displayed on the app's screen above can be found in the **App.js** file which is at the root of the project's directory. It is the entry point of the project and is executed when the development server starts.

## Install Expo Go on your device (optional)

It is availabe on both the Android Play Store and iOS App Store.

- [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) or greater
- [iOS App Store](https://apps.apple.com/app/expo-go/id982107779) - iOS 13 or greater

When you run `npx expo start` in your project, [Expo CLI](https://docs.expo.dev/more/expo-cli/) starts a [development server](https://docs.expo.dev/more/expo-cli/#develop) and generates a QR code as shown. 

- On your Android device, press **Scan QR Code** on the **Home** tab of the Expo Go app and scan the QR code you see in the terminal.
- On your iPhone or iPad, open the default Apple **Camera** app and scan the QR code you see in the terminal.

You can open the project on multiple devices simultaneously. Go ahead and try it on both phones at the same time if you have them handy.

## Using an emulator or simulator

If you are using an emulator/simulator, you may find the following Expo CLI keyboard shortcuts to be useful to open the app on any of the following platforms:
- Pressing `a` will open [Android Emulator or connected device](https://docs.expo.dev/workflow/android-studio-emulator).
- Pressing `i` will open in an [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator).
- Pressing `w` will open in a [web browser](https://docs.expo.dev/workflow/web).
