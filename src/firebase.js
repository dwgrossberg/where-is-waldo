import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9lePY7z9J0Kn76LHnZ4olejUHh4viEIU",
  authDomain: "where-is-waldo-e6db1.firebaseapp.com",
  projectId: "where-is-waldo-e6db1",
  storageBucket: "where-is-waldo-e6db1.appspot.com",
  messagingSenderId: "397047665923",
  appId: "1:397047665923:web:4b59424a785dac7b520536",
  databaseURL: "https://where-is-waldo-e6db1-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
