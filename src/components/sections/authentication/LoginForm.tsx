import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    localStorage.setItem('token', 'some_token'); // ✅ Store token
    navigate('/');
  };

  return (
    <Box
      sx={{
        mt: { sm: 5, xs: 2.5 },
      }}
    >
      <Stack spacing={3}>
        <TextField
          fullWidth
          variant="outlined"
          id="mail"
          type="text"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <IconifyIcon icon="el:eye-close" color="action.active" />
                  ) : (
                    <IconifyIcon icon="el:eye-open" color="action.focus" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="#!"
        type="submit"
        onClick={handleLogin}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
