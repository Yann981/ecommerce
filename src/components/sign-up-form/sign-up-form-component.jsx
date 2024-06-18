import { useState } from 'react';

import FormInput from '../form-input/form-input-component';
import './sign-up-form-styles.scss';
import Button from '../button/button-component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase-utils';

// defaultFormFields - 4 empty strings
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// useState Hook - changing the state of defaultFormFields (4 empty strings), to formFields
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // A function to reset the form once user submits their details to register.
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Able to see user input on browser console by console logging formFields.
  console.log(formFields);

  // Prevents the user from submitting an empty form. Async event, so has to be followed by an await.
  const handleSubmit = async (event) => {
    event.preventDefault();

    // If password is not equal to confirmPassword - alert the user with a message passwords do not match
    if (password != confirmPassword) {
      alert('Passwords do not match, please try again.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use.');
      } else {
        console.log('User creation encountered an error.', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Register with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Username'
          type='text'
          name='displayName'
          value={displayName}
          required
          onChange={handleChange}
        />

        <FormInput
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
        />

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <Button type='submit'>Register</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
