export type UserSignupData = {
  name: string;
  nickname: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
};

export type SignupProps = {
  onSubmit: (userSignupData: UserSignupData) => void;
};
