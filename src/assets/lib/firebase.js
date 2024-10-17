// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA64Dk9483Y5vJjyJap83NftONefUMZgNE",
  authDomain: "wondahs-portfolio-project.firebaseapp.com",
  projectId: "wondahs-portfolio-project",
  storageBucket: "wondahs-portfolio-project.appspot.com",
  messagingSenderId: "811689595075",
  appId: "1:811689595075:web:9f677b54cc7d5f09171276",
  measurementId: "G-CRYDPX5YNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
