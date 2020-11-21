import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { Button, Input, Form, useForm, FormField } from "components/UI";
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
  const [handleSubmit, fieldProps] = useForm(initialValues);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: ISignupForm) => {
      dispatch(authOperations.signup(values));
    },
    [dispatch]
  );

  const onSigninButtonClick = useCallback(() => {
    dispatch(authActions.clearError());
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={error}>
      <FormField>
        <Input {...fieldProps("first_name")} placeholder={TEXT.SIGNUP.FIRST_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("second_name")} placeholder={TEXT.SIGNUP.SECOND_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("login")} placeholder={TEXT.SIGNUP.LOGIN} />
      </FormField>
      <FormField>
        <Input {...fieldProps("email")} placeholder={TEXT.SIGNUP.EMAIL} />
      </FormField>
      <FormField>
        <Input {...fieldProps("phone")} placeholder={TEXT.SIGNUP.PHONE} />
      </FormField>
      <FormField>
        <Input {...fieldProps("password")} type="password" placeholder={TEXT.SIGNUP.PASSWORD} />
      </FormField>
      <FormField>
        <Input
          {...fieldProps("password_confirm")}
          type="password"
          placeholder={TEXT.SIGNUP.PASSWORD_CONFIRM}
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
          onClick={onSigninButtonClick}
          container={<Link to={ROUTES.SIGNIN} />}
        >
          {TEXT.SIGNUP.SIGNIN}
        </Button>
      </FormField>
    </Form>
  );
};
