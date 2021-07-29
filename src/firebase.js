import firebase from "firebase";
//firebase 설치 후 불러 온다.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaegNfyuStcaEr2rI4Qx3fcL5inFR_2-4",
  authDomain: "whats-app-clone-9fc52.firebaseapp.com",
  projectId: "whats-app-clone-9fc52",
  storageBucket: "whats-app-clone-9fc52.appspot.com",
  messagingSenderId: "110417646022",
  appId: "1:110417646022:web:5922a830102a57c4cfe2c7",
  measurementId: "G-MQPT65CV5G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
//export로 내보내면 import {auth, provider} from "./~"로 받을 수 있다.
export default db;
// export default로 내보내면 import db from "./~"로 받을 수 있다.
