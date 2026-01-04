import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

  const firebaseConfig = {
  apiKey: "AIzaSyC2VcoeHzvGN8bnRvljoKiOJz1rZlscj4M",
  authDomain: "milestone10-af00a.firebaseapp.com",
  projectId: "milestone10-af00a",
  storageBucket: "milestone10-af00a.firebasestorage.app",
  messagingSenderId: "15399693006",
  appId: "1:15399693006:web:ceb65b3f7c3bf28bb5be9f",
  measurementId: "G-0BNLNTHTYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth;