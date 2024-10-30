// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJSFXibm82wSW2cfacARBgUNtUvpSJWv0",
  authDomain: "infan-web.firebaseapp.com",
  projectId: "infan-web",
  storageBucket: "infan-web.appspot.com",
  messagingSenderId: "1070992863724",
  appId: "1:1070992863724:web:0115c58feb01b47e0b90c9",
  measurementId: "G-969MWPH5N2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);