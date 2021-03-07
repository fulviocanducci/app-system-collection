import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IData {
  firstName: string | undefined;
  lastName: string | undefined;
}

interface GlobalContextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<IData>({ firstName: '', lastName: '' });

  return (
    <GlobalContext.Provider value={{ text, setText, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalText() {
  const { text, setText } = useContext(GlobalContext);
  return { text, setText };
}

export function useGlobalData() {
  const { data, setData } = useContext(GlobalContext);
  return { data, setData };
}

export default GlobalProvider;
