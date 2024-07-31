import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDeLtNLrlP03OSa3fgjvATeNkhCM3W5Xs",
  authDomain: "linkedin-clone-efa99.firebaseapp.com",
  projectId: "linkedin-clone-efa99",
  storageBucket: "linkedin-clone-efa99.appspot.com",
  messagingSenderId: "320956010974",
  appId: "1:320956010974:web:a74046bac0c3ae30bd0d4f",
  measurementId: "G-PKKH69W93S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
