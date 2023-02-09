import { useState } from "react";
import { 
  createAuthUserWithEmailAndPassword,
  createUserFromAuth
} from "../../utils/firebase/firebase";

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
      const authUser = await createUserFromAuth(user, { displayName });
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
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required name="displayName" placeholder="John Smith"
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input type="email" required name="email" placeholder="example@site.com"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input type="password" required name="password" placeholder="********"
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" placeholder="********"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm