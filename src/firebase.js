import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjUflkGit8ScH0S8zNwxT_5A01Gzilye0",
  authDomain: "btg-showmyhomework.firebaseapp.com",
  projectId: "btg-showmyhomework",
  storageBucket: "btg-showmyhomework.appspot.com",
  messagingSenderId: "487631068784",
  appId: "1:487631068784:web:aec22bce727c613f501eb5",
  measurementId: "G-07JQ4CGD20",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
