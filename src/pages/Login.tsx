import { useAuth } from '../hooks/useAuth';
import React, { ChangeEvent, useState } from 'react';
import { LoginCredentials } from 'shared/IAuth';
import { TextInput } from '../components/Input/TextInput';
import { Link } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
};

export const Login = () => {
  const [userData, setUserData] = useState<LoginCredentials>(initialValues);

  const { login } = useAuth();

  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    let ch = event.target.textContent
    let data = {...userData, ch}
    setUserData(data);
  };

  const handleSubmit = () => {
    login(userData);
  };

  return (
    <div className="bg-neutral-200">
      <div className="bg-white p-6 py-8 max-w-sm mx-auto mt-[8em] shadow-lg rounded-lg">
        <h1 className="font-semibold mb-6">Create Your Account</h1>

        <form className="rounded-md space-y-6">
          <TextInput placeholder="Username" type="text" required={true} onChange={handleChange} />
          <TextInput placeholder="Password" type="password" required={true} onChange={handleChange} />
        </form>

        <button
          className="px-[8px] bg-blue-600/80 bg-gradient-to-tr from-blue-500 to-blue-400 py-1 rounded-full shadow-md text-white mt-12 hover:cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
        <h1>Do not have an account? <Link to={'/register'}>Sign up!</Link></h1>
      </div>
    </div>
  );
};
