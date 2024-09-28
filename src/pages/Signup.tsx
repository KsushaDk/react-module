import { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextInput, RadioInput } from '../components';

import type { signupTypes } from '../types';

export const Signup = ({ onSubmit }: signupTypes.SignupProps) => {
  const [userSignupData, setUserSignupData] = useState<signupTypes.UserSignupData>({
    name: '',
    nickname: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { name, nickname, email, gender, password, confirmPassword } = userSignupData;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    switch (true) {
      case !name:
        newErrors.name = 'Name is required';
        break;
      case !nickname:
        newErrors.nickname = 'Nickname is required';
        break;
      case !email:
        newErrors.email = 'Email is required';
        break;
      case !/\S+@\S+\.\S+/.test(email):
        newErrors.email = 'Email is invalid';
        break;
      case !gender:
        newErrors.gender = 'Gender is required';
        break;
      case !password:
        newErrors.password = 'Password is required';
        break;
      case password !== confirmPassword:
        newErrors.confirmPassword = 'Passwords do not match';
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setUserSignupData({ ...userSignupData, [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    },
    [userSignupData]
  );

  const handleRadioChange = useCallback(
    ({ name, value }: { name: string; value: string }) => {
      setUserSignupData({ ...userSignupData, [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    },
    [userSignupData]
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      onSubmit(userSignupData);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Name"
        placeholder="Your name"
        type="text"
        value={name}
        onChange={handleChange}
        error={errors?.name}
      />

      <TextInput
        name="nickname"
        label="Nickname"
        placeholder="Your nickname"
        type="text"
        value={nickname}
        onChange={handleChange}
        icon={<span>@</span>}
        error={errors?.nickname}
      />

      <TextInput
        name="email"
        label="Email"
        placeholder="Your email"
        type="email"
        value={email}
        onChange={handleChange}
        error={errors?.email}
      />

      <div className="checkbox__wrapper">
        <p>Gender</p>
        <RadioInput
          label="Male"
          name="gender"
          checked={gender === 'male'}
          onChange={() => handleRadioChange({ name: 'gender', value: 'male' })}
        />
        <RadioInput
          label="Female"
          name="gender"
          checked={gender === 'female'}
          onChange={() => handleRadioChange({ name: 'gender', value: 'female' })}
        />
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      <TextInput
        name="password"
        label="Password"
        placeholder="Your password"
        type="password"
        value={password}
        onChange={handleChange}
        error={errors?.password}
      />

      <TextInput
        name="confirmPassword"
        label="Confirm password"
        placeholder="Confirm your password"
        type="password"
        value={confirmPassword}
        onChange={handleChange}
        error={errors?.confirmPassword}
      />

      <Button type="submit">Sign Up</Button>
    </form>
  );
};
