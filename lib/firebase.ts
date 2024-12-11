// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCfd_YOq6e-ansMIS3vl0cPpfasI8kGgZo",
  authDomain: "vg2024-e35eb.firebaseapp.com",
  projectId: "vg2024-e35eb",
  storageBucket: "vg2024-e35eb.firebasestorage.app",
  messagingSenderId: "904073374757",
  appId: "1:904073374757:web:a49ef8482d5e9ef1bc63cc",
  measurementId: "G-4K0DR7VGES",
};

console.log({ firebaseConfig });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
