import React, { useState } from 'react';

import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      return await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> SIGN IN </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
            SIGN IN WITH GOOGLE{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
