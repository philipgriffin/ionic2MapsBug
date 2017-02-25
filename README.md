# ionic2MapsBug

Application showing a bug with ion-tabs and Native Maps

This issue is being tracked here: https://github.com/driftyco/ionic/issues/10533

## Instructions
Clone the project
```
https://github.com/philipgriffin/ionic2MapsBug.git
```

Install node_modules
```
npm install
```

Install Cordova Maps Plugin, This will require API Keys
```
ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
```

Add appropriate platform
```
ionic platform add android
```

Run the application on a device
```
ionic run android
```
