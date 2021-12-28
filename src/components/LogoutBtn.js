import Button from 'react-bootstrap/Button';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutBtn() {
  const { logout } = useAuth0();

  return (
    <Button  className="mr-2" variant="outline-dark" style={{backgroundColor: 'white'}} onClick={() => {
      logout({ returnTo: window.location.origin })
    }}>Logout
    </Button>
  )
}

export default LogoutBtn;