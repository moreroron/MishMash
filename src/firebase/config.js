import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCjc4KEzyLZO5tMxjN0kTXhkIAgJRBKY1I",
    authDomain: "mishmash-c5f74.firebaseapp.com",
    databaseURL: "https://mishmash-c5f74.firebaseio.com",
    projectId: "mishmash-c5f74",
    storageBucket: "mishmash-c5f74.appspot.com",
    messagingSenderId: "480949234470",
    appId: "1:480949234470:web:28de651b21e6521003efe7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.firestore();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };