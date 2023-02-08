import { initializeApp } from "firebase/app";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect, 
  signInWithPopup
} from "firebase/auth";

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

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);