// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"; 
import {} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm54YGIP2m8EcF_r2VSJlYr9sQ78x-6ZY",
  authDomain: "social-media-17646.firebaseapp.com",
  projectId: "social-media-17646",
  storageBucket: "social-media-17646.appspot.com",
  messagingSenderId: "302847398285",
  appId: "1:302847398285:web:e166690ad970b9af45adc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();