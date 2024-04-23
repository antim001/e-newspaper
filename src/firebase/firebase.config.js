import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUgcpbbfXhKBFgMuwRUlXWlXsRqTRMUPo",
  authDomain: "e-newspaper-862b2.firebaseapp.com",
  projectId: "e-newspaper-862b2",
  storageBucket: "e-newspaper-862b2.appspot.com",
  messagingSenderId: "636547298628",
  appId: "1:636547298628:web:91e2f388651a3f27d09311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();