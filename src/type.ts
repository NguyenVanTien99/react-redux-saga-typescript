export type EntriesProps = EntriesDescriptionProps & EntriesValuesProps;

export type EntriesDescriptionProps = {
  id: string;
  description: string;
};

export type EntriesValuesProps = {
  id: string;
  description: string;
  value: number;
  isExpense?: boolean;
};

export type ModalsControl = {
  isOpen: boolean;
  id: string;
};

export type EntriesValuesProps3 = {
  id: number;
  description: string;
  value: number;
  isExpense?: boolean;
};
