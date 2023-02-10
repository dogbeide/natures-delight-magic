import { initializeApp } from "firebase/app";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect, 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiXFfRUoggpRgExsCQBaLjh_mIbg7uqNY",
  authDomain: "natures-delight-magic-db.firebaseapp.com",
  projectId: "natures-delight-magic-db",
  storageBucket: "natures-delight-magic-db.appspot.com",
  messagingSenderId: "498540300282",
  appId: "1:498540300282:web:1db4f4aaa69f8086020643"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});


/* exports */
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const signInWithOnlyEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, extra) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...extra
      });
    } catch (err) {
      console.log('error creating user', err);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);