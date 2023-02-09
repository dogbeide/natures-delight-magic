import { useState } from "react";
import { 
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import './sign-up-form.scss';
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields({...defaultFormFields});
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      alert('password must be at least 6 characters long, weak password');
      return;
    }
    else if (password != confirmPassword) {
      alert('password and confirm password fields must match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      const authUser = await createUserDocFromAuth(user, { displayName });
      resetFormFields();
      alert('signup complete!');
    } catch(err) {
      if (err.code == 'auth/email-already-in-use') {
        alert('error creating user, email already in use')
      } else {
        console.log('error creating user', err);
      }
    }
    
  } 

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <p>Sign up with email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" required name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput type="email" required name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />

        <FormInput type="password" required name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />

        <FormInput type="password" required name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm