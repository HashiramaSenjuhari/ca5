import { FormControl, FormHelperText, InputLabel, Input, Button, IconButton, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [allSet, setAllSet] = useState(true);

  useEffect(() => {
    const isUsernameValid = username.length > 2 && username.length < 30;
    const isEmailValid = email.length > 2 && email.length < 30;
    const isPasswordValid = password.length > 9 && password.length < 30;
    const isConfirmPasswordValid = confirmPassword.length > 9 && confirmPassword.length < 30;
    const doPasswordsMatch = password === confirmPassword;

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && doPasswordsMatch) {
      setAllSet(false);
    } else {
      setAllSet(true);
    }
  }, [username, email, password, confirmPassword]);

  const validateUsername = (value) => {
    if (value.length < 3 || value.length > 30) {
      setUsernameError('Username must be between 3 and 30 characters');
      return false;
    } else {
      setUsernameError('');
      return true;
    }
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
    if (value.length >1 ) {
      setPasswordError('Password must be greater than 10 characters');
      return false;
    } else {
      setPasswordError('Password must be greater than 10 characters');
      return true;
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else {
      setConfirmPasswordError('');
      return true;
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    validateUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(e.target.value);
  };

  return (
    <div className='w-full flex justify-center items-center flex-1'>
      <div className='flex flex-col w-3/5 min-h-min gap-y-7 p-5 border text-wrap max-sm:w-full rounded-xl'>
        <div className='flex items-center justify-center'>
          <p className='text-[12px]'>Please fill your details to continue</p>
        </div>
        <FormControl required error={Boolean(usernameError)}>
          <InputLabel htmlFor='my-input'>Username</InputLabel>
          <Input
            id='my-input'
            aria-describedby='my-helper-text'
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && <FormHelperText>{usernameError}</FormHelperText>}
        </FormControl>

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

        <FormControl required sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Box sx={{ display: 'flex' }}>
            <InputLabel htmlFor='my-input-ConfirmPassword'>Confirm Password</InputLabel>
            <Input
              id='my-input-ConfirmPassword'
              aria-describedby='my-helper-text'
              type={confirmPasswordType}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              sx={{ flex: 1 }}
            />
            <IconButton
              onClick={() => setConfirmPasswordType((type) => (type === 'password' ? 'text' : 'password'))}
            >
              {confirmPasswordType === 'password' ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Box>
          {confirmPasswordError && <FormHelperText>{confirmPasswordError}</FormHelperText>}
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          sx={{
            bgcolor: '#1B1B1B',
            ':hover': {
              bgcolor: '#1B1B1B',
            },
          }}
          disabled={allSet}
        >
          <Link className='w-full h-full' to={'/'} onClick={() => localStorage.setItem('username',username)}>
            Sign Up
          </Link>
        </Button>
        <p>
          Already a User?{' '}
          <Link className='font-semibold text-purple-600' to={'/sign-in'}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
