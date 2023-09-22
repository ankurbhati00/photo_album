// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDegTOqefnvWXKrb4qujj8YvD2U8C2eX1s",
  authDomain: "photo-album-a1ee5.firebaseapp.com",
  projectId: "photo-album-a1ee5",
  storageBucket: "photo-album-a1ee5.appspot.com",
  messagingSenderId: "466556655840",
  appId: "1:466556655840:web:73f622deb61bb084d89885",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
