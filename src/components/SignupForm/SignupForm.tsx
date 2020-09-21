import React, { FC } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input, Form, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { ROUTES } from "constants/routes";
import { errorSelector } from "services/auth/selectors";
import { signupRequest } from "services/auth/actions";
import { clearAuthError } from "services/auth/slice";
import { ISignupRequest } from "utils/request/auth";

const TEXT = {
  FIRST_NAME: "Имя",
  SECOND_NAME: "Фамилия",
  LOGIN: "Придумайте логин",
  EMAIL: "Адрес электронной почты",
  PASSWORD: "Придумайте пароль",
  PASSWORD_CONFIRM: "Повторите пароль",
  PHONE: "Номер мобильного телефона",
  SUBMIT: "Зарегистрироваться",
  SIGNIN: "Войти с паролем",
};

interface ISignupForm extends ISignupRequest {
  password_confirm: string;
}

const initialValues: ISignupForm = {
  first_name: "",
  second_name: "",
  login: "",
  email: "",
  password: "",
  password_confirm: "",
  phone: "",
};

export const SignupForm: FC = () => {
  const { push } = useHistory();
  const [data, handleSubmit, handleChange] = useForm(initialValues);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  const onSubmit = (values: ISignupForm) => {
    dispatch(signupRequest(values));
  };

  const handleSigninButtonClick = () => {
    dispatch(clearAuthError());
    push(ROUTES.SIGNIN);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={error}>
      <FormField>
        <Input
          name="first_name"
          value={data.first_name}
          placeholder={TEXT.FIRST_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="second_name"
          value={data.second_name}
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
        <Input name="phone" value={data.phone} placeholder={TEXT.PHONE} onChange={handleChange} />
      </FormField>
      <FormField>
        <Input
          name="password"
          value={data.password}
          placeholder={TEXT.PASSWORD}
          type="password"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="password_confirm"
          value={data.password_confirm}
          placeholder={TEXT.PASSWORD_CONFIRM}
          type="password"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SUBMIT}
        </Button>
      </FormField>
      <FormField>
        <Button view="pseudo" width="max" type="button" onClick={handleSigninButtonClick}>
          {TEXT.SIGNIN}
        </Button>
      </FormField>
    </Form>
  );
};
