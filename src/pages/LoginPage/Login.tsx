import { useAuth } from '../../hooks/useAuth';
import { ChangeEvent, useState } from 'react';
import { LoginCredentials } from 'shared/IAuth';

const initialValues = {
  username: '',
  password: '',
};

export const Login = () => {

  const [userData, setUserData] = useState<LoginCredentials>(initialValues);

  const { login } = useAuth();

  const handleChange = (/* prop */) => (event: ChangeEvent) => {
    // setUserData({ ...userData, [prop]: event.target });
  };

  const handleSubmit = () => {
    login(userData);
  };

  return (
    <div className="bg-neutral-200">
      <div className="bg-white p-6 py-8 max-w-sm mx-auto mt-[8em] shadow-lg rounded-lg">
        <h1 className="font-semibold mb-6">Create Your Account</h1>

        <form className="rounded-md space-y-6">
          <input
            className="focus:border-l-4 focus:border-l-blue-300 focus:font-semibold  pl-1 shadow-sm  w-full text-black text-sm"
            type="text"
            placeholder="Username"
            required
            /* onChange={handleChange('username')} */
            autoFocus
            autoCorrect="false"
          />

          <input
            className="focus:border-l-4 focus:border-l-blue-300 focus:font-semibold  pl-1 shadow-sm w-full text-black text-sm"
            type="password"
            placeholder="Password"
            required
            /* onChange={handleChange('password')} */
          />
        </form>

        <button
          className="px-[8px] bg-blue-600/80 bg-gradient-to-tr from-blue-500 to-blue-400 py-1 rounded-full shadow-md text-white mt-12 hover:cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
