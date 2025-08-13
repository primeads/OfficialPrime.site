import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.username.value;  // your input's name="username"
  const password = form.password.value;

  try {
    // Sign in
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Signed in:", userCredential.user);
    alert("Signed in successfully!");
  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
});
