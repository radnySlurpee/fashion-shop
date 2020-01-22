import firebase from 'firebase/app'; //server
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication


const config = {
    apiKey: "AIzaSyAH2MBf_kBDQptKRI_fmyO-3vR1L2uuqKQ",
    authDomain: "fashion-db-c1739.firebaseapp.com",
    databaseURL: "https://fashion-db-c1739.firebaseio.com",
    projectId: "fashion-db-c1739",
    storageBucket: "fashion-db-c1739.appspot.com",
    messagingSenderId: "173342650878",
    appId: "1:173342650878:web:3a4037e89cf4d7518390af",
    measurementId: "G-Z4RX8LL0EQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(function(error){
    console.log('oops!', error);
  });

export default firebase;