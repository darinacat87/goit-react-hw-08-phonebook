import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  return (
    <Button
      component={RouterLink}
      to="/login"
      key="Log in"
      sx={{
        mx: 1,
        my: 1,
        color: 'orange',
        display: 'block',
        border: 4,
        borderRadius: '10px',
      }}
    >
      Sign in
    </Button>
  );
}
