import {
  FieldValuesFromFieldErrors,
  ErrorMessage as RHFErrorMessage,
} from "@hookform/error-message";
import { FieldErrors, FieldName, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  errors: FieldErrors<T>;
  name: FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>;
};
const ErrorMessage = <T extends FieldValues>({ errors, name }: Props<T>) => {
  return (
    <div className="h-10 flex justify-start w-full">
      <RHFErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-sm text-error-red ml-1 mt-1">{message}</p>
        )}
      />
    </div>
  );
};

export default ErrorMessage;
