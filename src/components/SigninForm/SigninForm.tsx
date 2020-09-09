import React, { FC } from "react";
import { useHistory } from "react-router";

import { Form, FormField, Input, Button } from "components/UI";
import { useForm } from "hooks/useForm";

const TEXT = {
  LOGIN: "Введите логин",
  PASSWORD: "Введите пароль",
  SUBMIT: "Войти",
  REGISTER: "Зарегистрироваться",
};

interface ISigninForm {
  login: string;
  password: string;
}

const initialValues: ISigninForm = {
  login: "",
  password: "",
};

const cb = (data: ISigninForm) => {
  console.log(data);
};

export const SigninForm: FC = () => {
  const { push } = useHistory();
  const [data, handleSubmit, handleChange] = useForm(initialValues);

  return (
    <Form onSubmit={handleSubmit(cb)}>
      <FormField>
        <Input name="login" value={data.login} placeholder={TEXT.LOGIN} onChange={handleChange} />
      </FormField>
      <FormField>
        <Input
          name="password"
          value={data.password}
          type="password"
          placeholder={TEXT.PASSWORD}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SUBMIT}
        </Button>
      </FormField>
      <FormField>
        <Button view="pseudo" width="max" onClick={() => push("/signup")}>
          {TEXT.REGISTER}
        </Button>
      </FormField>
    </Form>
  );
};
