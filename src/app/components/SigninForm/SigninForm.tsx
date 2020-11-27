import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TEXT } from "app/constants/text";
import { Form, useForm, FormField, Input, Button } from "app/components/UI";
import { authOperations, authSelectors, authActions } from "app/store/auth";
import { ROUTES } from "app/constants/routes";
import type { ISigninRequest } from "app/utils/request/types";

const defaultValues: ISigninRequest = {
  login: "",
  password: "",
};

export const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const [handleSubmit, fieldProps] = useForm(defaultValues);
  const error = useSelector(authSelectors.getError);

  const onSubmit = useCallback(
    (values) => {
      dispatch(authOperations.signin(values));
    },
    [dispatch]
  );

  const onSignupButtonClick = useCallback(() => {
    dispatch(authActions.clearError());
  }, [dispatch]);

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
          onClick={onSignupButtonClick}
        >
          {TEXT.SIGNIN.SIGNUP}
        </Button>
      </FormField>
    </Form>
  );
};
