# Bodker
### Summary
This is the instruction file for installing and running the app on windows on an android emulator.
First of all, **clone** the repository.

## Installing the Emulator
- Download and install [Android Studio]
- Open Android Studio
- Go to **Tools** >> **AVD Manager** >> **Create Virtual Device** (If it's not there, search it in the toolbars)
- In **Category** choose **Phone** and pick **Pixel 2**, then Click **Next**
- Under **Release Name** find **R** and click **Download**
- Click **Next**, give your device a name and **Finish**
### Add Android SDK to the project:
- open **BuildForGod-app/HobbiesApp/android** folder
- create a file named **local.properties**
- Write into the file:
 `sdk.dir=<SDK_Location>`, **IMPORTANT - DOUBLE BACKSLASH IN PATH!** and replace **SDK_Location** with the location of your intsalled Android SDK (on Windows 10, defaults to **C:\\\Users\\\<Username>\\\AppData\\\Local\\\Android\\\Sdk**)

## Installing dependencies
- Download and install [JDK] (7 up to 11, **not higher**)
- Download and install [Node]
- Create an environment variable with the Java SDK path: 
**Windows → Search → System → Advanced System Settings → Environment variables → New**

   `JDK_HOME: <C:path_to_JDK>` (Windows default is C:\Program Files\Java\jdk)
   `JAVA_HOME: <C:path_to_JDK>` (Windows default is C:\Program Files\Java\jdk)
- Edit "Path" variable - add <C:path_to_JDK>, add <path_to_android_sdk>, add <path_to_android_sdk\platform-tools>
- (command line) Install React Native Globally:
    `npm install -g react-native-cli`
- cd to BuildForGood/HobbiesApp
- `npm install` 


## Running the app
- Open **Android Studio** 
- **Tools >> AVD Manager**
- Under **Actions** click Run (green triangle) - if you're asked to install HAXM, do it
- **You may need to enable Intel Virtualization from BIOS**
- Wait for boot to complete
- Open **cmd**
- cd to BuildForGood/HobbiesApp
- `react-native run-android`

**The app will install for a minute and automatically open**

### Issues
For any questions or technical support, please contact me at danzlotnikov@gmail.com






   [Android Studio]: <https://developer.android.com/studio?gclid=Cj0KCQiAkuP9BRCkARIsAKGLE8Ue-x76LixUElT7SgUXdCiHXj17yEUULvx7qsZkHPM8he-Z4vOz0NQaAlspEALw_wcB&gclsrc=aw.ds>
   [JDK]: <https://www.oracle.com/java/technologies/javase-downloads.html>
   [Node]: <https://nodejs.org/en/>
