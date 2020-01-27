import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC2gsxjIXSK6mHX3oCUqd8bIfIg9Ex05F4",
    authDomain: "simple-notes-firebase-199b6.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-199b6.firebaseio.com",
    projectId: "simple-notes-firebase-199b6",
    storageBucket: "simple-notes-firebase-199b6.appspot.com",
    messagingSenderId: "120385161940",
    appId: "1:120385161940:web:cff73f68d4b06ca18a0941",
    measurementId: "G-4NT00BF1LP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database();

export default firebase;

