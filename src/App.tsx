import { Signin, Signup } from './pages';
import './styles/App.scss';

function App() {
  return (
    <>
      <Signin onSubmit={data => console.log('SIGNIN', data)} />
      <Signup onSubmit={data => console.log('SIGNUP', data)} />
    </>
  );
}

export default App;
