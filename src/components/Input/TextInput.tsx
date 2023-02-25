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
      className="pl-1 py-1 rounded-sm shadow-sm w-full text-black text-sm"
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
