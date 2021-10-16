import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCmrzubdxr4wGdTcm-CMfCHdE_AqpICnRo",
  authDomain: "complaint-forum-6d511.firebaseapp.com",
  projectId: "complaint-forum-6d511",
  storageBucket: "complaint-forum-6d511.appspot.com",
  messagingSenderId: "1091765360562",
  appId: "1:1091765360562:web:8504e12b0c1ad8358cb6ab"
}; 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

