import firebase from 'firebase/app';
// import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// var firebase = require('firebase/app');
// all 3 are optional and you only need to require them at the start
// require('firebase/auth');
// require('firebase/database');
// require('firebase/storage');


var firebaseConfig = {
    apiKey: "AIzaSyACOy_vBuZkXJTWhic6i6l0Na-WvdnOD0A",
    authDomain: "jalebi-7b9b8.firebaseapp.com",
    projectId: "jalebi-7b9b8",
    // storageBucket: "jalebi-7b9b8.appspot.com",
    // messagingSenderId: "472012927589",
    // appId: "1:472012927589:web:90ae6940b425dd63b50c8c",
    // measurementId: "G-1XHMJ6DF57"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebaseConfig.auth();
const db = firebase.firestore();
export { fire, db };