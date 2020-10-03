import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { Button, Input, Form, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { ROUTES } from "constants/routes";
import { authOperations, authSelectors, authActions } from "services/auth";
import type { ISignupRequest } from "utils/request/types";

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
  const [data, handleSubmit, handleChange] = useForm(initialValues);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const onSubmit = useCallback((values: ISignupForm) => {
    dispatch(authOperations.signup(values));
  }, []);

  const handleSigninButtonClick = useCallback(() => {
    dispatch(authActions.clearError());
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={error}>
      <FormField>
        <Input
          name="first_name"
          value={data.first_name}
          placeholder={TEXT.SIGNUP.FIRST_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="second_name"
          value={data.second_name}
          placeholder={TEXT.SIGNUP.SECOND_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="login"
          value={data.login}
          type="text"
          placeholder={TEXT.SIGNUP.LOGIN}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="email"
          value={data.email}
          type="text"
          placeholder={TEXT.SIGNUP.EMAIL}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="phone"
          value={data.phone}
          placeholder={TEXT.SIGNUP.PHONE}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="password"
          value={data.password}
          placeholder={TEXT.SIGNUP.PASSWORD}
          type="password"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="password_confirm"
          value={data.password_confirm}
          placeholder={TEXT.SIGNUP.PASSWORD_CONFIRM}
          type="password"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SIGNUP.SUBMIT}
        </Button>
      </FormField>
      <FormField>
        <Button
          view="pseudo"
          width="max"
          type="button"
          onClick={handleSigninButtonClick}
          container={<Link to={ROUTES.SIGNIN} />}
        >
          {TEXT.SIGNUP.SIGNIN}
        </Button>
      </FormField>
    </Form>
  );
};
