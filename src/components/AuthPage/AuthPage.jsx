import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SingUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div className="AuthPage">
        <div>
          <p>{showLogin ? 'Not yet' : 'Already'} a member?
            <span onClick={() => setShowLogin(!showLogin)}>{showLogin ? ' Sign Up' : ' Log In'}</span>
          </p>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  )
}