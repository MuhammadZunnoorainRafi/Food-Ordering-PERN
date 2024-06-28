import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useRef } from 'react';
import { useCreateUser } from '../api/UserApi';
import { useNavigate } from 'react-router-dom';

function AuthCallback() {
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const navigate = useNavigate();
  const hasUserCreated = useRef(false);

  useEffect(() => {
    if (user?.sub && user.email && !hasUserCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasUserCreated.current = true;
    }
    navigate('/');
  }, [createUser, navigate, user]);

  return <div>Loading...</div>;
}

export default AuthCallback;
