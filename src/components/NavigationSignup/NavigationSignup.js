import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function Signup() {
  return (
    <Button
      component={RouterLink}
      to="/register"
      key="Sign up"
      sx={{
        mx: 1,
        my: 1,
        color: 'orange',
        display: 'block',
        border: 4,
        borderRadius: '10px',
      }}
    >
      Sign up
    </Button>
  );
}
