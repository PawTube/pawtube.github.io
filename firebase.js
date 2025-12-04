// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhtICW3CZ3xk2aE-LFUx_hDvmEMMfoHmc",
    authDomain: "old--2005---2012.firebaseapp.com",
    projectId: "old--2005---2012",
    storageBucket: "old--2005---2012.firebasestorage.app",
    messagingSenderId: "151747899362",
    appId: "1:151747899362:web:50517fcdead38e2e57d3bb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);