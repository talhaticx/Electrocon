import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALpRiI0UNTE4aEu4Fv2uc7-0nbNPqaTVc",
  authDomain: "econ-25.firebaseapp.com",
  projectId: "econ-25",
  storageBucket: "econ-25.firebasestorage.app",
  messagingSenderId: "760716874365",
  appId: "1:760716874365:web:e9a6fdcca78aebfb5d9714",
  measurementId: "G-PZ46ZL5NNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);