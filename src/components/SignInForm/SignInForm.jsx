import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './sign-in-form.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { 
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInWithOnlyEmailAndPassword
} from '../../utils/firebase/firebase';


const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { user } = await signInWithOnlyEmailAndPassword(email, password);
      resetFields();
      navigate('/');
    } catch(err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/invalid-email':
          alert('no user exists with this email');
          break;
        default:
          console.log('error signing in', err);
          break;
      }
      
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      resetFields();
    } catch(err) {
      console.log('error signing in', err);
    }
    
  }

  const resetFields = () => {
    setFormFields(defaultFormFields);
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />
        <FormInput
          label="password"
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;