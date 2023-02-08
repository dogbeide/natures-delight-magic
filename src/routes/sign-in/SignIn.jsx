import { 
  signInWithGooglePopup,
  createUserFromAuth
} from "../../utils/firebase/firebase";

const SignIn = () => {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google Popup
      </button>
    </div>
  )
}

export default SignIn;