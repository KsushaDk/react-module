export type userSigninData = {
  email: string;
  password: string;
};

export type SigninProps = {
  onSubmit: (userSigninData: userSigninData) => void;
};
