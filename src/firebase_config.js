import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBP8GbM9w2pFrr5aS-XPG8OUPr5E1HDlJI",
    authDomain: "todo-devapp.firebaseapp.com",
    projectId: "todo-devapp",
    storageBucket: "todo-devapp.appspot.com",
    messagingSenderId: "860633420905",
    appId: "1:860633420905:web:76b7945e31fffa75ab3ef8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };