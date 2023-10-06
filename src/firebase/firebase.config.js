// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL2AxWXbIqfrAqNNI6T_bJgbSQX7hv2QU",
    authDomain: "auth-projects-1.firebaseapp.com",
    projectId: "auth-projects-1",
    storageBucket: "auth-projects-1.appspot.com",
    messagingSenderId: "493286489859",
    appId: "1:493286489859:web:3115f8722344907d0db336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;