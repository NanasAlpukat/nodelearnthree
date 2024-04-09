// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG_dkBCx2JAzXmGSJnmA6nTu-H6a-Vfic",
  authDomain: "expressrio-3d3d3.firebaseapp.com",
  projectId: "expressrio-3d3d3",
  storageBucket: "expressrio-3d3d3.appspot.com",
  messagingSenderId: "501055339068",
  appId: "1:501055339068:web:86a89b099717738dc72139",
  measurementId: "G-Q48S0LQP8J"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authFirebase = getAuth(appFirebase)
const provider = new GoogleAuthProvider()
export const withGoogle = () => signInWithPopup(authFirebase,provider)
// module.exports = {authFirebase,withGoogle}