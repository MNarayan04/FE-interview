import React, { useState } from 'react';
import Hello from './Hello';

const Sign = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleLogin = () => {
    

    if (userId === 'vishal@kumohq.co' && password === 'password') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        // Render login form
        <div>
            <h3>Email</h3>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        // Re nder authorized content
        <div> <Hello/></div>
      )}
    </div>
  );
};

export default Sign;