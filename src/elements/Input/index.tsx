import TextField from "@mui/material/TextField";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  rules: RegisterOptions<T, Path<T>>;
  isRequired?: boolean;
};

const Input = <T extends FieldValues>({
  control,
  name,
  label,
  rules,
  isRequired = true,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: { value: isRequired, message: "" } }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          size="small"
          fullWidth
          required={isRequired}
          autoComplete="off"
        />
      )}
    />
  );
};

export default Input;
