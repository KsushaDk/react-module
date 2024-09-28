import { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextInput } from '../components';

import type { signinTypes } from '../types';

export const Signin = ({ onSubmit }: signinTypes.SigninProps) => {
  const [userSigninData, setUserSigninData] = useState<signinTypes.userSigninData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { email, password } = userSigninData;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    switch (true) {
      case !email:
        newErrors.email = 'Email is required';
        break;
      case !/\S+@\S+\.\S+/.test(email):
        newErrors.email = 'Email is invalid';
        break;
      case !password:
        newErrors.password = 'Password is required';
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setUserSigninData({ ...userSigninData, [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    },
    [userSigninData]
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      onSubmit(userSigninData);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput
        name="email"
        label="Email"
        placeholder="Your email"
        type="email"
        value={email}
        onChange={handleChange}
        error={errors?.email}
      />
      <TextInput
        name="password"
        label="Password"
        placeholder="Your password"
        type="password"
        value={password}
        onChange={handleChange}
        error={errors?.password}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};
