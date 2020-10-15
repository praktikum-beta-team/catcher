import { useState, FormEvent, ChangeEvent } from "react";

export const useForm = <T>(
  initialValues: T
): [
  (cb?: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => void,
  (name: keyof T) => {
    name: keyof T;
    value: T[keyof T];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
] => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (callback?: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (callback) {
      callback(values);
    }
  };

  const fieldProps = (name: keyof T) => ({
    name,
    value: values[name],
    onChange: ({ target }: ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [name]: target.value,
      });
    },
  });

  return [handleSubmit, fieldProps];
};
