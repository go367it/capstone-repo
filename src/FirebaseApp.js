import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGlh9h0En7nbBPHg0r2PP_Mj-sjAwapXg",
  authDomain: "capstone-quiztap.firebaseapp.com",
  projectId: "capstone-quiztap",
  storageBucket: "capstone-quiztap.appspot.com",
  messagingSenderId: "888686998762",
  appId: "1:888686998762:web:8d72d830a20f27bb115393",
  measurementId: "G-H4JGQ9F1ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);