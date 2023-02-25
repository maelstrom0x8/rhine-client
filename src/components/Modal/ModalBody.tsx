import React, { ReactNode } from 'react';

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
  header?: string;
};

export const ModalBody = ({ children, header, className }: ModalBodyProps) => {
  return (
    <div className={`${className} rounded-sm`}>
      <div className='shadow-sm mb-1'>
      {header && <h1 className='font-semibold text-sm'>{header}</h1>}
      </div>
      {children}
    </div>
  );
};
