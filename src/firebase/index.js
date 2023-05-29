// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore";
import "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyAplMBGDGaaiyTUqZ0RjveMUmrSta25T8s",
    authDomain: "template-6899e.firebaseapp.com",
    projectId: "template-6899e",
    storageBucket: "template-6899e.appspot.com",
    messagingSenderId: "124350956695",
    appId: "1:124350956695:web:f10601424abcb7108d55d2",
    measurementId: "G-G028YCH0K8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}