import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAEQ4b8fK0YPF4DHMewAqi5Ui4TR98LknE",
    authDomain: "app-c251d.firebaseapp.com",
    projectId: "app-c251d",
    storageBucket: "app-c251d.appspot.com",
    messagingSenderId: "375110041244",
    appId: "1:375110041244:web:8d7ddae60420edc0e9f759"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };