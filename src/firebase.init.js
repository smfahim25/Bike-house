// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeMKJWHPohoLTzcC_Xgag49N21lddnaQ4",
    authDomain: "bike-house-22f6f.firebaseapp.com",
    projectId: "bike-house-22f6f",
    storageBucket: "bike-house-22f6f.appspot.com",
    messagingSenderId: "562953077582",
    appId: "1:562953077582:web:000a846da45d3ae1c4541f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;