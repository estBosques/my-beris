import { createContext, useState } from "react";

interface AddRecordContextInterface {
  detailedForm: boolean;
  toggleFormType: () => void;
  isExpense: boolean;
  switchType: () => void;
}

export const AddRecordContext = createContext<AddRecordContextInterface>(
  {} as AddRecordContextInterface
);

export function AddRecordContextProvider(props: any) {
  const [detailedForm, setSelection] = useState(true);
  const [isExpense, setIsExpense] = useState(true);

  let toggleFormType = () => {
    setSelection(!detailedForm);
  };

  let switchType = () => {
    setIsExpense(!isExpense);
  };

  return (
    <AddRecordContext.Provider
      value={{
        detailedForm,
        toggleFormType,
        isExpense,
        switchType,
      }}
    >
      {props.children}
    </AddRecordContext.Provider>
  );
}
