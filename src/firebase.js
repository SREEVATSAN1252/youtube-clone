// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjJbYheOJxYaQYqHTxjannMDteWNaledw",
  authDomain: "fir-ec1d8.firebaseapp.com",
  projectId: "fir-ec1d8",
  storageBucket: "fir-ec1d8.appspot.com",
  messagingSenderId: "492756931586",
  appId: "1:492756931586:web:8bec24230f9dca0b28c31b",
  measurementId: "G-ZZ33SBQLJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);