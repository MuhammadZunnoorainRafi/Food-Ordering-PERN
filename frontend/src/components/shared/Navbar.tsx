import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../ui/button';
import UsernameMenu from '../UserNameMenu';

function Navbar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex items-center justify-between px-10 py-3 shadow-md">
      <h1>FOODY🍔</h1>
      <div className="flex items-center justify-center gap-3">
        {/* {isAuthenticated ? ( */}
        <UsernameMenu />
        {/* ) : ( */}
        <Button onClick={async () => await loginWithRedirect()}>Login</Button>
        {/* )} */}
      </div>
    </div>
  );
}

export default Navbar;
