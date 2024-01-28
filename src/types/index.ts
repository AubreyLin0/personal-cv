import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

export type Languages = "EN" | "JA" | "TW";

export type Size = "small" | "normal" | "medium" | "large";

export type AlertType = "success" | "error" | undefined;

export type LanguagesList = {
  [key in Languages]: string;
};

export type NestedLanguagesList = {
  [key: string]: { [key in Languages]: string };
};

export type SizeList = { [key in Size]: String };

export type ContactFormValue = {
  name: string;
  email: string;
  title: string;
  content: string;
};

export type InputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  isValid: boolean;
  rules?: RegisterOptions<T, Path<T>>;
  isRequired?: boolean;
};

export type AlertProps = { isOpen: boolean; type: AlertType; message: string };
