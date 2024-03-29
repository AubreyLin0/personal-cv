import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { Controller, FieldValues } from "react-hook-form";
import ContentLanguage from "../../store";
import { ERROR_MESSAGES } from "../../constants";
import { InputProps } from "../../types";

const Input = <T extends FieldValues>({
  control,
  name,
  label,
  isValid,
  rules = undefined,
  isRequired = true,
}: InputProps<T>) => {
  const { language } = useContext(ContentLanguage);
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: isRequired,
          message: ERROR_MESSAGES["required"][language],
        },
        ...rules,
      }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          size="small"
          fullWidth
          autoComplete="off"
          error={isValid}
        />
      )}
    />
  );
};

export default Input;
