# AppMinimize

# cordova-plugin-appminimize

This is a cordova plugin to minimizes the application in android devices

## Supported Platforms

- Android

## Installation


Cordova local build

    cordova plugin add https://github.com/tomloprod/cordova-plugin-appminimize.git

## Usage

```js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.plugins.appMinimize.minimize();
}

```

