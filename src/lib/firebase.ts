import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5m8-UaQKSyTa6r9JmXxVb-wZZDhrcBmo",
  authDomain: "clipai-e420b.firebaseapp.com",
  projectId: "clipai-e420b",
  storageBucket: "clipai-e420b.firebasestorage.app",
  messagingSenderId: "771147772935",
  appId: "1:771147772935:web:c4eaa28b5e5f8f744c66a2",
  measurementId: "G-64EQ44NFQ6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
