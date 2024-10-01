const loginToApp = async (e) => {
  e.preventDefault();
  console.log("Logging in with:", email, password);

  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
          login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: userCredential.user.displayName,
              photoURL: userCredential.user.photoURL,
          })
      );
      console.log("User logged in:", userCredential.user);
  } catch (error) {
      alert(error.message);
  }
};

const registerToApp = async (e) => {
  e.preventDefault();
  if (!name) {
      return alert('Please enter a full name!');
  }
  console.log("Registering with:", name, profilePic, email, password);

  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
          displayName: name,
          photoURL: profilePic,
      });

      await addDoc(collection(db, "users"), {
          name,
          email,
          profilePic,
          uid: userCredential.user.uid,
      });

      dispatch(
          login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: name,
              photoURL: profilePic,
          })
      );
      console.log("User registered:", userCredential.user);
  } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
          alert('This email is already in use. Please log in or use a different email.');
      } else {
          alert(error.message);
      }
  }
};
