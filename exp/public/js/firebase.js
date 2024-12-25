const firebaseConfig = {
    apiKey: "AIzaSyDbzCjgWUJwfXE7HvfzFDbKbSbhfxB6rQs",
    authDomain: "mohandb-51134.firebaseapp.com",
    projectId: "mohandb-51134",
    storageBucket: "mohandb-51134.firebasestorage.app",
    messagingSenderId: "616164973711",
    appId: "1:616164973711:web:c82f454ed9bc6fbc5b64fa"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore(mohandb);