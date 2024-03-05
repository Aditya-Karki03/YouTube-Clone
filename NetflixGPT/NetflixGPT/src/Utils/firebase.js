// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgt4WmMW9P4A7lN4JmvOTDQ0YvaxnyJJU",
  authDomain: "netflixgpt-ae245.firebaseapp.com",
  projectId: "netflixgpt-ae245",
  storageBucket: "netflixgpt-ae245.appspot.com",
  messagingSenderId: "390108086041",
  appId: "1:390108086041:web:75d9e61ff03fce4de38f88",
  measurementId: "G-EB8F4EKB8B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
