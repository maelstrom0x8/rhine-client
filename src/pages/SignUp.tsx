import { TextInput } from '../components/Input/TextInput';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { RegisterCredentials } from 'shared/IAuth';
import { Link } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
  email: '',
};

export const SignUp = () => {
  const [userData, setUserData] = useState<RegisterCredentials>(initialValues);

  const { register } = useAuth();

  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    let ch = event.target.textContent;
    let data = { ...userData, ch };
    setUserData(data);
  };

  const handleSubmit = () => {
    register(userData);
  };

  return (
    <div className="bg-neutral-200">
      <div className="bg-white p-6 py-8 max-w-sm mx-auto mt-[8em] shadow-lg rounded-lg">
        <h1 className="font-semibold mb-6">Create Your Account</h1>

        <form className="rounded-md space-y-6">
          <TextInput
            placeholder="Username"
            type="text"
            required={true}
            onChange={handleChange}
          />
          <TextInput
            placeholder="Email"
            type="email"
            required={true}
            onChange={handleChange}
          />
          <TextInput
            placeholder="Password"
            type="password"
            required={true}
            onChange={handleChange}
          />
        </form>

        <button
          className="px-[8px] bg-blue-600/80 bg-gradient-to-tr from-blue-500 to-blue-400 py-1 rounded-full shadow-md text-white mt-12 hover:cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <h1 className='text-sm mt-3'>Already have an account? <Link to={'/login'}><em>Login!</em></Link></h1>
      </div>
    </div>
  );
};
