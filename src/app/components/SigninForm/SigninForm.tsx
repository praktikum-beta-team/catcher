import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TEXT } from "app/constants/text";
import { Form, useForm, FormField, Input, Button } from "app/components/UI";
import { authOperations, authSelectors } from "app/store/auth";
import type { ISigninRequest } from "app/services/api/auth";
import { YANDEX } from "app/constants/oAuth";
import { ROUTES } from "app/constants/routes";

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
      <FormField>
        <Input placeholder={TEXT.SIGNIN.LOGIN} {...fieldProps("login")} />
      </FormField>
      <FormField>
        <Input placeholder={TEXT.SIGNIN.PASSWORD} type="password" {...fieldProps("password")} />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SIGNIN.BUTTON_SIGNIN}
        </Button>
      </FormField>
      <FormField>
        <Button
          view="pseudo"
          width="max"
          type="button"
          container={
            // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
            <a
              href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX.CLIENT_ID}&redirect_uri=http://localhost:3001${ROUTES.OAUTH}`}
            />
          }
        >
          {TEXT.SIGNIN.BUTTON_SIGNIN_YANDEX}
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
          {TEXT.SIGNIN.BUTTON_SIGNUP}
        </Button>
      </FormField>
    </Form>
  );
};
