import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useLogoutUserMutation } from 'redux/authApi';

export default function NavLogout() {
  const navigate = useNavigate();
  const [logout, isSuccess] = useLogoutUserMutation();

  const handleLogout = async () => {
    await logout();
    if (isSuccess) {
      navigate('/login', { replace: true });
    }
  };

  return (
    <Button
      onClick={handleLogout}
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
      Logout
    </Button>
  );
}
