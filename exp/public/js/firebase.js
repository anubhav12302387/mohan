// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9vGuol1509BJ8lohKC8eWP3iiy0XpU0Y",
    authDomain: "test-blogs-68c0c.firebaseapp.com",
    projectId: "test-blogs-68c0c",
    storageBucket: "test-blogs-68c0c.firebasestorage.app",
    messagingSenderId: "247045162940",
    appId: "1:247045162940:web:66330ce3332967444dcdb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);