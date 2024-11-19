import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArwkpf4FTlvneghfJwQbyvDAh9oed714c",
  authDomain: "loginsignup-af8aa.firebaseapp.com",
  projectId: "loginsignup-af8aa",
  storageBucket: "loginsignup-af8aa.appspot.com",
  messagingSenderId: "1076262833514",
  appId: "1:1076262833514:web:c83ce4d20b53ebb41b6913",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
export {
  app,
  db,
  storage,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getAuth,
  getDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
};
