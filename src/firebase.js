import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcC4AyFlo1i7nkNGQdGHp-CN1smIHYH8Q",
  authDomain: "clone-f7e57.firebaseapp.com",
  databaseURL: "https://clone-f7e57.firebaseio.com",
  projectId: "clone-f7e57",
  storageBucket: "clone-f7e57.appspot.com",
  messagingSenderId: "580879836314",
  appId: "1:580879836314:web:edbc406467a18b10c9eb23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
