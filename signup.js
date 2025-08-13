// signup.js
document.getElementById('signup-form').addEventListener('submit', async function(e){
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Use username as a fake email for Firebase Auth
    const email = username + "@example.com"; 

    // Create user in Firebase Auth
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);

    // Store extra info in Firestore
    await db.collection('users').doc(userCredential.user.uid).set({
      firstName,
      lastName,
      dob,
      username
    });

    document.getElementById('message').innerText = "Signup successful!";
  } catch (error) {
    document.getElementById('message').innerText = error.message;
  }
});
