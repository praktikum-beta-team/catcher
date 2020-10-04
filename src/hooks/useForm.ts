import { useState, FormEvent, ChangeEvent } from "react";

export const useForm = <T>(
  initialValues: T
): [
  T,
  (cb?: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => void,
  (
    name: keyof T
  ) => {
    name: keyof T;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
] => {
  const [data, setData] = useState(initialValues);

  const handleSubmit = (callback?: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (callback) {
      callback(data);
    }
  };

  const fieldProps = (name: keyof T) => ({
    name,
    value: data[name] ? String(data[name]) : '',
    onChange: ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [name]: target.value,
      });
    },
  });

  return [data, handleSubmit, fieldProps];
};
