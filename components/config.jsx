// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPVsVZhhpBgVv1gkm0-8AX_ZiiQvk5DIQ",
  authDomain: "foodieguide-3d56e.firebaseapp.com",
  projectId: "foodieguide-3d56e",
  storageBucket: "foodieguide-3d56e.appspot.com",
  messagingSenderId: "22172427110",
  appId: "1:22172427110:web:6952d5166df8a7d4495ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Database
const db = getDatabase(app);
