import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

export const config = {
  apiKey: "AIzaSyAi491Bs560kOay0oi0VOHKJHJZZzu4Y4I",
  authDomain: "portal-ca653.firebaseapp.com",
  databaseURL: "https://portal-ca653.firebaseio.com",
  projectId: "portal-ca653",
  storageBucket: "portal-ca653.appspot.com",
  messagingSenderId: "174190244166",
  appId: "1:174190244166:web:153c072f1ca326af393547",
  measurementId: "G-D60MXLYM4G",
};

firebase.initializeApp(config);

firebase.firestore();

export default firebase;
