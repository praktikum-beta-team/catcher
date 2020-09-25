import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Form, FormField, Input, Button } from "components/UI";
import { useForm } from "hooks/useForm";
import { authOperations, authSelectors, authActions } from "services/auth";
import { ROUTES } from "constants/routes";
import type { ISigninRequest } from "utils/request/types";

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
  const error = useSelector(authSelectors.getError);

  const onSubmit = (values: ISigninRequest) => {
    dispatch(authOperations.signin(values));
  };

  const handleSignupButtonClick = () => {
    dispatch(authActions.clearError());
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
        <Button
          view="pseudo"
          width="max"
          type="button"
          container={<Link to={ROUTES.SIGNUP} />}
          onClick={handleSignupButtonClick}
        >
          {TEXT.SIGNUP}
        </Button>
      </FormField>
    </Form>
  );
};
