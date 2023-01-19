/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCzV3RiIhA9ejhkVJBVnnp2xLhaDd77UAQ",
  authDomain: "friendlychat-bfc57.firebaseapp.com",
  projectId: "friendlychat-bfc57",
  storageBucket: "friendlychat-bfc57.appspot.com",
  messagingSenderId: "1089959138211",
  appId: "1:1089959138211:web:45ca1301a3ae40d7f64016",
  measurementId: "G-3RBQM7TZLX"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}