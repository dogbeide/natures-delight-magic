import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';
import { 
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserFromAuth
} from "../../utils/firebase/firebase";

const SignIn = () => {

  useEffect(() => {
    const fetchRedirectAuth = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        const userDocRef = await createUserFromAuth(res.user);
      }
      console.log(res);
    }
    fetchRedirectAuth();
  }, []);
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
    </div>
  )
}

export default SignIn;