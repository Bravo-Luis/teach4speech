// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8P30kFfZZU9z3dlUK-wIHgeBRrZZmbLA",
  authDomain: "teach4speech.firebaseapp.com",
  projectId: "teach4speech",
  storageBucket: "teach4speech.appspot.com",
  messagingSenderId: "2527671713",
  appId: "1:2527671713:web:5eab0507d41b8cb6d407e0",
  measurementId: "G-SP539L659X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);


export default app;