// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqv4Hg2eXbJYxZJIPfdd7-u4vP9OM0M3I",
  authDomain: "discount-pro-647a8.firebaseapp.com",
  projectId: "discount-pro-647a8",
  storageBucket: "discount-pro-647a8.firebasestorage.app",
  messagingSenderId: "616424892330",
  appId: "1:616424892330:web:b497ff9589a7584e192dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;