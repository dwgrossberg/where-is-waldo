import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebase = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB9lePY7z9J0Kn76LHnZ4olejUHh4viEIU",
    authDomain: "where-is-waldo-e6db1.firebaseapp.com",
    projectId: "where-is-waldo-e6db1",
    storageBucket: "where-is-waldo-e6db1.appspot.com",
    messagingSenderId: "397047665923",
    appId: "1:397047665923:web:4b59424a785dac7b520536",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return { db };
};

export default firebase;
