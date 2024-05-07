import React, { useState } from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';

function Authentication(props) {
  const {setUser} = props
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <div>
        <h1>Authentication</h1>
        {isSignIn ? <SignIn setUser={setUser} /> : <SignUp setUser={setUser} />}
        <button onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
        </button>
      </div>
    </>
  );
}

export default Authentication;