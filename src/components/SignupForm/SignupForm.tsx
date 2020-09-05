import React, { FC } from "react";
import { useHistory } from "react-router";

import { Button, Input, Form, FormField } from "components/UI";
import { useForm } from "hooks/useForm";

const TEXT = {
  FIRST_NAME: "Имя",
  SECOND_NAME: "Фамилия",
  LOGIN: "Придумайте логин",
  EMAIL: "Адрес электронной почты",
  PASSWORD: "Придумайте пароль",
  PASSWORD_CONFIRM: "Повторите пароль",
  SUBMIT: "Зарегистрироваться",
  SIGNIN: "Войти с паролем",
};

interface ISignupForm {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialValues: ISignupForm = {
  firstName: "",
  secondName: "",
  login: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const cb = (data: ISignupForm) => {
  console.log(data);
};

export const SignupForm: FC = () => {
  const { push } = useHistory();
  const [data, handleSubmit, handleChange] = useForm(initialValues);

  return (
    <Form onSubmit={handleSubmit(cb)}>
      <FormField>
        <Input
          name="firstName"
          value={data.firstName}
          placeholder={TEXT.FIRST_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="secondName"
          value={data.secondName}
          placeholder={TEXT.SECOND_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="login"
          value={data.login}
          type="text"
          placeholder={TEXT.LOGIN}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="email"
          value={data.email}
          type="text"
          placeholder={TEXT.EMAIL}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="password"
          value={data.password}
          placeholder={TEXT.PASSWORD}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="passwordConfirm"
          value={data.passwordConfirm}
          placeholder={TEXT.PASSWORD_CONFIRM}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SUBMIT}
        </Button>
      </FormField>
      <FormField>
        <Button view="pseudo" width="max" onClick={() => push("/")}>
          {TEXT.SIGNIN}
        </Button>
      </FormField>
    </Form>
  );
};
