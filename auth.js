// auth.js
import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
    setDoc,
    doc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

window.signup = async () => {
    const email = document.getElementById("email").value;
    const pass  = document.getElementById("password").value;

    const user = await createUserWithEmailAndPassword(auth, email, pass);
    await setDoc(doc(db, "users", user.user.uid), {
        created: serverTimestamp(),
        channelName: email.split("@")[0]
    });
    alert("Account created");
};

window.login = async () => {
    const email = document.getElementById("email").value;
    const pass  = document.getElementById("password").value;

    await signInWithEmailAndPassword(auth, email, pass);
    alert("Logged in");
    location.reload();
};

window.logout = async () => {
    await signOut(auth);
    location.reload();
};

onAuthStateChanged(auth, user => {
    if (user) {
        document.getElementById("authStatus").innerText = "Logged in";
        document.getElementById("logoutBtn").style.display = "block";
    } else {
        document.getElementById("authStatus").innerText = "Logged out";
        document.getElementById("logoutBtn").style.display = "none";
    }
});