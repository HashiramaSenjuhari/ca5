import React, { useEffect, useState } from 'react';
import { FormControl, FormHelperText, InputLabel, Input, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [allset, setAllset] = useState(true);

  useEffect(() => {
    const isEmailValid = email.length > 2 && email.length < 30;
    const isPasswordValid = password.length > 2 && password.length < 30;

    // Check both conditions for setting allset
    setAllset(!(isEmailValid && isPasswordValid));
  }, [email, password]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      setEmailError('Invalid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (value) => {
    if (value.length < 3 || value.length > 30) {
      setPasswordError('Password must be between 3 and 30 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col w-3/5 min-h-min gap-y-7 p-5 border text-wrap max-sm:w-full rounded-xl'>
        <div className='flex items-center justify-center'>
          <p className='text-[12px]'>Please fill your details to continue</p>
        </div>
        <FormControl required error={Boolean(emailError)}>
          <InputLabel htmlFor='my-input-email'>Email address</InputLabel>
          <Input
            id='my-input-email'
            aria-describedby='my-helper-text'
            value={email}
            onChange={handleEmailChange}
            type='email'
          />
          {emailError && <FormHelperText>{emailError}</FormHelperText>}
        </FormControl>
        <FormControl required sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Box sx={{ display: 'flex' }}>
            <InputLabel htmlFor='my-input-password'>Password</InputLabel>
            <Input
              id='my-input-password'
              aria-describedby='my-helper-text'
              value={password}
              onChange={handlePasswordChange}
              type={passwordType}
              sx={{ flex: 1, borderBottom: 'none' }}
            />
            <IconButton onClick={() => setPasswordType((type) => (type === 'password' ? 'text' : 'password'))}>
              {passwordType === 'password' ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Box>
          {passwordError && <FormHelperText>{passwordError}</FormHelperText>}
        </FormControl>
        <Button type='submit' variant='contained' sx={{
          bgcolor: '#1B1B1B',
          ':hover': {
            bgcolor: '#1B1B1B'
          }
        }}
        disabled={allset}>
          <Link to={'/'}>
          Submit
          </Link>
        </Button>
        <p>Register new member? <Link className='font-semibold text-purple-600' to={'/sign-up'}>Sign up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
