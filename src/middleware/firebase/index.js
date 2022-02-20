import firebase from "firebase/compat";
import auth from 'firebase/auth'
import storage from 'firebase/storage'

 const app = firebase.initializeApp({
    apiKey: "AIzaSyCe8kJKCTyXDGMbq7JkglVSNluLpPfaqTo",
    authDomain: "players-vue.firebaseapp.com",
    databaseURL: "https://players-vue-default-rtdb.firebaseio.com",
    projectId: "players-vue",
    storageBucket: "players-vue.appspot.com",
    messagingSenderId: "325419947088",
    appId: "1:325419947088:web:d45984c673034d047a6d55"
});

// Get a reference to the storage service, which is used to create references in your storage bucket
export default {
    firebase
}