// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhKhaqxu08Sp68FhpBTTIuzZcN0_GcAMk",
    authDomain: "independent-provider.firebaseapp.com",
    projectId: "independent-provider",
    storageBucket: "independent-provider.appspot.com",
    messagingSenderId: "1005712728803",
    appId: "1:1005712728803:web:05a6930a8c43c30bc5dbd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;