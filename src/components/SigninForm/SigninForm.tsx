import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TEXT } from "constants/text";
import { Form, FormField, Input, Button } from "components/UI";
import { useForm } from "hooks/useForm";
import { authOperations, authSelectors, authActions } from "services/auth";
import { ROUTES } from "constants/routes";
import type { ISigninRequest } from "utils/request/types";

const defaultValues: ISigninRequest = {
  login: "",
  password: "",
};

export const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const [handleSubmit, fieldProps] = useForm(defaultValues);
  const error = useSelector(authSelectors.getError);

  const onSubmit = useCallback((values) => {
    dispatch(authOperations.signin(values));
  }, []);

  const handleSignupButtonClick = useCallback(() => {
    dispatch(authActions.clearError());
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={error}>
      <FormField>
        <Input placeholder={TEXT.SIGNIN.LOGIN} {...fieldProps("login")} />
      </FormField>
      <FormField>
        <Input placeholder={TEXT.SIGNIN.PASSWORD} type="password" {...fieldProps("password")} />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SIGNIN.SUBMIT}
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
          {TEXT.SIGNIN.SIGNUP}
        </Button>
      </FormField>
    </Form>
  );
};
