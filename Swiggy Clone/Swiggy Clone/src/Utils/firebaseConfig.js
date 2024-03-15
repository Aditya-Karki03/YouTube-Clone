// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuqNgaTeE-CKflMbl83cBpF7DYmlC7VAY",
  authDomain: "food-ordering-app-f7c45.firebaseapp.com",
  projectId: "food-ordering-app-f7c45",
  storageBucket: "food-ordering-app-f7c45.appspot.com",
  messagingSenderId: "232512098963",
  appId: "1:232512098963:web:7f8061bea2be2f27b63366",
  measurementId: "G-9H350WW4Z4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);