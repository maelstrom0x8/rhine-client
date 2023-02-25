import React, { ReactNode } from 'react';
import { ModalProp } from './ModalProps';

interface ModalOverlayProps extends ModalProp {
  children: React.ReactNode;
};

export const ModalOverlay = ({ children, open }: ModalOverlayProps) => {
  return (
    <div className={`${!open ? 'hidden' : ''} fixed bg-neutral-500/50 top-0 left-0 right-0 bottom-0`}>
      {children}
    </div>
  );
};
