import * as firebase from 'firebase';

  // Initialize Firebase
  // https://console.firebase.google.com/project/addressbook-c1971/database/addressbook-c1971/data
  
  var config = {
    apiKey: "AIzaSyAwZZbUe4ctn0HO_J8e52RASKGdPg-UlTE",
    authDomain: "addressbook-c1971.firebaseapp.com",
    databaseURL: "https://addressbook-c1971.firebaseio.com",
    projectId: "addressbook-c1971",
    storageBucket: "addressbook-c1971.appspot.com",
    messagingSenderId: "822997012303"
  };

firebase.initializeApp(config);

export const database = firebase.database().ref('/contacts');
export const storage = firebase.storage().ref();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;