import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { Controller, FieldValues } from "react-hook-form";
import ContentLanguage from "../../store";
import { ERROR_MESSAGES } from "../../constants";
import { InputProps } from "../../types";

type Props<T extends FieldValues> = {
  rows: number;
} & InputProps<T>;

const TextArea = <T extends FieldValues>({
  control,
  name,
  label,
  rows,
  isValid,
  rules = undefined,
  isRequired = true,
}: Props<T>) => {
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
          autoComplete="off"
          fullWidth
          multiline
          error={isValid}
          rows={rows}
        />
      )}
    />
  );
};

export default TextArea;
