import { createContext, useState } from "react";

interface AddRecordContextInterface {
  isDetailed: boolean;
  toggleFormType: () => void;
  isExpense: boolean;
  switchType: () => void;
}

export const AddRecordContext = createContext<AddRecordContextInterface>(
  {} as AddRecordContextInterface
);

export function AddRecordContextProvider(props: any) {
  const [isDetailed, switchForm] = useState(true);
  const [isExpense, setIsExpense] = useState(true);

  let toggleFormType = () => {
    switchForm(!isDetailed);
  };

  let switchType = () => {
    setIsExpense(!isExpense);
  };

  return (
    <AddRecordContext.Provider
      value={{
        isDetailed,
        toggleFormType,
        isExpense,
        switchType,
      }}
    >
      {props.children}
    </AddRecordContext.Provider>
  );
}
