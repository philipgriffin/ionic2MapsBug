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

When the application loads the home screen will be displayed showing the ion-tabs at the bottom


<img src="http://i.imgur.com/CqUYYlR.png" width="224">

Navigating to the next page via the header bar button will display the first sub page with the tabs successfully hidden

<img src="http://i.imgur.com/dkxG56W.png" width="224">

Navigating to the next page via the header bar button will display the second sub page with the native map and the tabs will not be hidden. 

<img src="http://i.imgur.com/2I2NW5U.png" width="224">
