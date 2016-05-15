var appMinimize = {
  minimize: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AppMinimize', 'minimize', []);
  }
}

if (!window.plugins) { window.plugins = {}; }

window.plugins.appMinimize = appMinimize;
return window.plugins.appMinimize;
