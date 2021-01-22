import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TEXT } from "constants/text";
import { Form, useForm, Form__Field, Input, Button } from "components/UI";
import { authOperations, authSelectors } from "store/auth";
import type { ISigninRequest } from "services/api";
import { AUTH_URL } from "constants/yandexOAuth";
import { ROUTES } from "constants/routes";

const defaultValues: ISigninRequest = {
  login: "",
  password: "",
};

export const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const [handleSubmit, fieldProps] = useForm(defaultValues);
  const error = useSelector(authSelectors.getError);

  const handleSigninFormSybmit = useCallback(
    (values) => {
      dispatch(authOperations.signinRequest(values));
    },
    [dispatch]
  );

  const handleSignupButtonClick = useCallback(() => {
    dispatch(authOperations.clearError());
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit(handleSigninFormSybmit)} error={error}>
      <Form__Field>
        <Input placeholder={TEXT.SIGNIN.LOGIN} {...fieldProps("login")} />
      </Form__Field>
      <Form__Field>
        <Input placeholder={TEXT.SIGNIN.PASSWORD} type="password" {...fieldProps("password")} />
      </Form__Field>
      <Form__Field>
        <Button view="action" width="max">
          {TEXT.SIGNIN.BUTTON_SIGNIN}
        </Button>
      </Form__Field>
      <Form__Field>
        <Button
          view="pseudo"
          width="max"
          type="button"
          container={
            // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
            <a href={AUTH_URL} />
          }
        >
          {TEXT.SIGNIN.BUTTON_SIGNIN_YANDEX}
        </Button>
      </Form__Field>
      <Form__Field>
        <Button
          view="pseudo"
          width="max"
          type="button"
          container={<Link to={ROUTES.SIGNUP} />}
          onClick={handleSignupButtonClick}
        >
          {TEXT.SIGNIN.BUTTON_SIGNUP}
        </Button>
      </Form__Field>
      <Form__Field>
        <Button view="plain" width="max" type="button" container={<Link to={ROUTES.GAME} />}>
          {TEXT.SIGNIN.BUTTON_PLAY}
        </Button>
      </Form__Field>
    </Form>
  );
};
