import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV8Voj9faAKl0Jia1ChSaQ_ep7JECKYcs",
    authDomain: "invoice-app-rui.firebaseapp.com",
    projectId: "invoice-app-rui",
    storageBucket: "invoice-app-rui.appspot.com",
    messagingSenderId: "849399207186",
    appId: "1:849399207186:web:bebf2f75ab82bfb1540fcb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();