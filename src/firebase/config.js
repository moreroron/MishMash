import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const apiKey = process.env.REACT_APP_API_KEY;

var firebaseConfig = {
    apiKey: apiKey,
    authDomain: "mishmash-c5f74.firebaseapp.com",
    databaseURL: "https://mishmash-c5f74.firebaseio.com",
    projectId: "mishmash-c5f74",
    storageBucket: "mishmash-c5f74.appspot.com",
    messagingSenderId: "480949234470",
    appId: "1:480949234470:web:28de651b21e6521003efe7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
const firestore = firebase.firestore();

export { firestore };