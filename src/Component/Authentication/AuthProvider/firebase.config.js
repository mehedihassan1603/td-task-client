// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACYMqxI3jpYgOG98-i8iirdwKajBQxHyw",
  authDomain: "to-do-a0767.firebaseapp.com",
  projectId: "to-do-a0767",
  storageBucket: "to-do-a0767.appspot.com",
  messagingSenderId: "776759190543",
  appId: "1:776759190543:web:d65492ecbb9212085a6f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;