// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5pWosrlor2g9iptaB4wS3EdSosx0RuMM",
  authDomain: "richard-experiment.firebaseapp.com",
  projectId: "richard-experiment",
  storageBucket: "richard-experiment.appspot.com",
  messagingSenderId: "361941620193",
  appId: "1:361941620193:web:7018f959549fac47ddaea0",
  measurementId: "G-L7TJQEF3KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});
