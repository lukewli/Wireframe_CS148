import React from 'react';
import Button from 'react-bootstrap/Button';

function SignInButton({ bgcolor, text, link }) {
  return (
    <>
      <Button
        style={{
          backgroundColor: { bgcolor },
          borderColor: { bgcolor },
          height: '50px',
          width: '80px',
          color: 'white',
        }}
        href={link}
        className="justify-content-center align-items-center d-flex"
      >
        {text}
      </Button>
    </>
  );
}

export default SignInButton;
