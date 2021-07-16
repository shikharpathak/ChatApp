// import * as firebase from 'firebase'
import { firebase } from "@firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDMQ955vgp1aTlqgCaCAGjVD9rHcBcblfU",
  authDomain: "chatapp-d2ffa.firebaseapp.com",
  projectId: "chatapp-d2ffa",
  storageBucket: "chatapp-d2ffa.appspot.com",
  messagingSenderId: "954613949015",
  appId: "1:954613949015:web:8c0dc82d5627c62709f912",
};
// let app;
// if(firebase.apps.length === 0)
// {
//     app = firebase.initialiseApp(firebaseConfig)
// }
// else{
//     app=firebase.app();
// }
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth=firebase.auth();
export { db, auth };