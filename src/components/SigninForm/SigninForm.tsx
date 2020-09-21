import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, FormField, Input, Button } from "components/UI";
import { useForm } from "hooks/useForm";
import { signinRequest, clearAuthError, errorSelector } from "services/auth/";
import { useHistory } from "react-router";
import { ROUTES } from "constants/routes";
import { ISigninRequest } from "utils/request/auth";

const TEXT = {
  LOGIN: "Введите логин",
  PASSWORD: "Введите пароль",
  SUBMIT: "Войти",
  SIGNUP: "Зарегистрироваться",
};

const initialValues: ISigninRequest = {
  login: "",
  password: "",
};

export const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const [data, handleSubmit, handleChange] = useForm(initialValues);
  const error = useSelector(errorSelector);
  const { push } = useHistory();

  const onSubmit = (values: ISigninRequest) => {
    dispatch(signinRequest(values));
  };

  const handleSignupButtonClick = () => {
    dispatch(clearAuthError());
    push(ROUTES.SIGNUP);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={error}>
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
        <Button view="pseudo" width="max" type="button" onClick={handleSignupButtonClick}>
          {TEXT.SIGNUP}
        </Button>
      </FormField>
    </Form>
  );
};
