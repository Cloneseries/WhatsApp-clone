// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSMsSoxZ52O3SLPeGXPZK56ooYlXFNaqQ",
  authDomain: "whatsapp-clone-9d8f0.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9d8f0.firebaseio.com",
  projectId: "whatsapp-clone-9d8f0",
  storageBucket: "whatsapp-clone-9d8f0.appspot.com",
  messagingSenderId: "1020217432753",
  appId: "1:1020217432753:web:106bf638f9ed7e467f2090",
  measurementId: "G-LE72FDL9DB"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db 