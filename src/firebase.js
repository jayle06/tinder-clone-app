import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBagPyzhKojJjj7kn3b_2o1sE5fzXC2DNM",
    authDomain: "tinder-56c18.firebaseapp.com",
    databaseURL: "https://tinder-56c18.firebaseio.com",
    projectId: "tinder-56c18",
    storageBucket: "tinder-56c18.appspot.com",
    messagingSenderId: "1026071323339",
    appId: "1:1026071323339:web:0e0a631e5bb0c3c4b0b14e",
    measurementId: "G-LTZ6FGLNWB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;