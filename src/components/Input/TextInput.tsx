import React from 'react';

type InputProps = {
  type: 'text' | 'password' | 'email';
  placeholder?: string;
  required?: boolean;
  value?: string;
  name?: string;
  className?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  type,
  placeholder,
  required,
  onChange,
  value,
  name,
  className
}: InputProps) => {
  return (
    <input
      className={`${className} pl-1 py-1 rounded-sm shadow-sm w-full text-black text-sm`}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};
