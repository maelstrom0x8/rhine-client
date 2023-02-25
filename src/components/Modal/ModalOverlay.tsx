import React, { ReactNode } from 'react';
import { ModalBaseProps } from './ModalProps';


interface ModalOverlayProps {
  children: React.ReactNode;
  open: boolean
};

export const ModalOverlay = ({ children, open }: ModalOverlayProps) => {
  return (
    <div className={`${!open ? 'hidden' : ''} fixed bg-neutral-500/50 top-0 left-0 right-0 bottom-0`}>
      {children}
    </div>
  );
};
