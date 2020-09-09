import { useState, FormEvent, ChangeEvent } from "react";

export const useForm = <T>(
  initialValues: T
): [
  T,
  (cb?: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => void,
  (event: ChangeEvent<HTMLInputElement>) => void
] => {
  const [data, setData] = useState(initialValues);

  const handleSubmit = (callback?: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (callback) {
      callback(data);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return [data, handleSubmit, handleChange];
};
