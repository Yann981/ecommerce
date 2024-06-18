import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase-utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import Button from '../../components/button/button-component';
// import FormInput from '../form-input/form-input-component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/* <FormInput
        label='Email'
        type='email'
        name='email'
        value={email}
        required
        onChange={handleChange}
      />
      <FormInput
        label='Password'
        type='password'
        name='password'
        value={password}
        required
        onChange={handleChange}
      /> */}
      <Button buttonType='google' onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <Button onClick={logGoogleUser}>Sign in</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
