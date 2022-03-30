import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDee5ODupaLS9H72w0lYiM8fyFX4W7xmWA",
  authDomain: "actividad-10-utch-75b39.firebaseapp.com",
  databaseURL: "https://actividad-10-utch-75b39-default-rtdb.firebaseio.com",
  projectId: "actividad-10-utch-75b39",
  storageBucket: "actividad-10-utch-75b39.appspot.com",
  messagingSenderId: "229520964668",
  appId: "1:229520964668:web:acf9861d62329d7a2a1739"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
