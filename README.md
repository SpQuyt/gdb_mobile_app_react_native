# GDB MOBILE APPLICATION
## Task 1 (15928): Login with Facebook, Google, Apple
### Overview:
  * With Facebook: I use **react-native-fbsdk** to login. It requires AppID of my Facebook's application; and a lot of configs in **`android`** directory.
  * With Google: I use **react-native-google-signin** to login. It requires **`google-services.json`** file, which can be achieved from **firebase console**.
  * With Apple:  First of all, I do not have MacOS to test on. Second of all, **Signin With Apple** is a new concept for all of react-native developers. Third of all, all of the libraries I've found are only in beta-test, not release. So I hope we can look into this feature in a near future.
### Install:
  * Clone this repo.
  * In **`index.js `**, change the `initialRouteName` value (line 23) to **LoginScreen**.
  * Open terminal or Cmd and run this code
  ```bash
    cd android && gradlew clean && cd .. && react-native run-android
  ```
## Task 2 (15929): Implement a horizontal steps screen
### Overview:
  
### Install:
  * Clone this repo.
  * In **`index.js `**, change the `initialRouteName` value (line 23) to **HorizontalStepsScreen**.
  * Open terminal or Cmd and run this code
  ```bash
    cd android && gradlew clean && cd .. && react-native run-android
  ```