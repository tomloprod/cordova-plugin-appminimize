# AppMinimize

# cordova-plugin-appminimize

This is a cordova plugin to minimizes the application in android devices

## Supported Platforms

- Android

## Installation


Cordova:

    cordova plugin add https://github.com/tomloprod/cordova-plugin-appminimize.git

## Usage

This plugin exports an object at

```javascript
window.plugins.appMinimize
```

with one method called "minimize".

##Example

In this example the application is minimized by pressing the back button

```javascript
  $ionicPlatform.registerBackButtonAction(function (event) {
      event.preventDefault();
      window.plugins.appMinimize.minimize();
  }, 100);
```

