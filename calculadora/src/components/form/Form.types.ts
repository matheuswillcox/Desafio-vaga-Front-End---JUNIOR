export type ActionTypesTypes = "amount" | "installments" | "mdr";

export type ActionTypes = {
  type: ActionTypesTypes;
  payload: string;
};
export type StateTypes = {
  amount: string | number;
  installments: string | number;
  mdr: string | number;
};

export type ResultTypes = {
  amount: string;
  date: string;
};
