import React, { createContext } from 'react';

interface UIContextProps {
  isOpen: boolean;
  onClose: () => void;
}

const UIContext = createContext<UIContextProps>({
  isOpen: false,
  onClose: () => {},
});

const { Provider } = UIContext;

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => {
  const isOpen = false;

  const onClose = () => {};

  return <Provider value={{ isOpen, onClose }}>{children}</Provider>;
};

export { UIContext, UIProvider };

