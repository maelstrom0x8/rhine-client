import React from 'react';

type InputProps = {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  type,
  placeholder,
  required,
  onChange,
}: InputProps) => {
  return (
    <input
      className="focus:border-l-4 focus:border-l-blue-300 focus:font-semibold  pl-1 shadow-sm w-full text-black text-sm"
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
