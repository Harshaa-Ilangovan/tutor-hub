// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0tsC_UVweovdAb1CDU0AU2bn8N8F4OMw",
  authDomain: "tutor-hub-cc798.firebaseapp.com",
  projectId: "tutor-hub-cc798",
  storageBucket: "tutor-hub-cc798.appspot.com",
  messagingSenderId: "309454933108",
  appId: "1:309454933108:web:0e7a31760fe813db22d521",
  measurementId: "G-CGBMTQL0T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Google Sign-In
document.getElementById('google-signin').addEventListener('click', () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log('Google Sign In Success:', result.user);
      // Save user data to Firestore if needed
    })
    .catch((error) => {
      console.error('Error during Google Sign In:', error);
    });
});

// Facebook Sign-In
document.getElementById('facebook-signin').addEventListener('click', () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      console.log('Facebook Sign In Success:', result.user);
      // Save user data to Firestore if needed
    })
    .catch((error) => {
      console.error('Error during Facebook Sign In:', error);
    });
});

// Student Form Submission
document.getElementById('student-login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const name = event.target.name.value;
  const school = event.target.school.value;
  const grade = event.target.grade.value;
  const phone = event.target.phone.value;
  const mailid = event.target.mailid.value;
  const state = event.target.state.value;
  const gender = event.target.gender.value;
  const age = event.target.age.value;
  const profilePicture = event.target['profile-picture'].files[0];
  
  let profilePictureURL = '';

  if (profilePicture) {
    const storageRef = ref(storage, 'uploads/' + profilePicture.name);
    try {
      const snapshot = await uploadBytes(storageRef, profilePicture);
      profilePictureURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', profilePictureURL);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  }

  try {
    await addDoc(collection(db, "students"), {
      name,
      school,
      grade,
      phone,
      mailid,
      state,
      gender,
      age,
      profilePictureURL
    });
    alert('Student data saved successfully!');
    window.location.href = 'index.html'; // Redirect to the homepage
  } catch (e) {
    console.error('Error adding document:', e);
  }
});

