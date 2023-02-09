import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';
import { 
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocFromAuth
} from "../../utils/firebase/firebase";
import './authentication.scss';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

const Authentication = () => {

  // useEffect(() => {
  //   const fetchRedirectAuth = async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       const userDocRef = await createUserFromAuth(res.user);
  //     }
  //   }
  //   fetchRedirectAuth();
  // }, []);

  return (
    <div className='auth-container'>
      {/*<h1>Sign In Page</h1>*/}
      {/*<button onClick={logGoogleUser}>Sign In with Google Popup</button>*/}
      {/*<button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>*/}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;