// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHF174S9vg6IpfHEAYYmPwzGxDMqGPK88",
  authDomain: "api-tienda-cb697.firebaseapp.com",
  projectId: "api-tienda-cb697",
  storageBucket: "api-tienda-cb697.appspot.com",
  messagingSenderId: "850619588344",
  appId: "1:850619588344:web:fd69e7abc98429646ea50d",
  measurementId: "G-8JP0DSJ304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);