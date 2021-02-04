import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { Button, Input, Form, useForm, Form__Field } from "components/UI";
import { ROUTES } from "constants/routes";
import { authOperations, authSelectors } from "store/auth";
import type { ISignupRequest } from "services/api";
import type { IUserData } from "store/auth/slice";

interface ISignupForm
  extends Required<Pick<IUserData, "firstName" | "secondName" | "login" | "email" | "phone">> {
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
  phone: "",
};

export const SignupForm: FC = () => {
  const [handleSubmit, fieldProps] = useForm(initialValues);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: ISignupForm) => {
      const requestData: ISignupRequest = {
        first_name: values.firstName,
        second_name: values.secondName,
        login: values.login,
        email: values.email,
        password: values.password,
        phone: values.phone,
      };
      dispatch(authOperations.signupRequest(requestData));
    },
    [dispatch]
  );

  const onSigninButtonClick = useCallback(() => {
    dispatch(authOperations.clearError());
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={error}>
      <Form__Field>
        <Input {...fieldProps("firstName")} placeholder={TEXT.SIGNUP.FIRST_NAME} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("secondName")} placeholder={TEXT.SIGNUP.SECOND_NAME} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("login")} placeholder={TEXT.SIGNUP.LOGIN} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("email")} placeholder={TEXT.SIGNUP.EMAIL} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("phone")} placeholder={TEXT.SIGNUP.PHONE} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("password")} type="password" placeholder={TEXT.SIGNUP.PASSWORD} />
      </Form__Field>
      <Form__Field>
        <Input
          {...fieldProps("passwordConfirm")}
          type="password"
          placeholder={TEXT.SIGNUP.PASSWORD_CONFIRM}
        />
      </Form__Field>
      <Form__Field>
        <Button view="action" width="max">
          {TEXT.SIGNUP.SUBMIT}
        </Button>
      </Form__Field>
      <Form__Field>
        <Button
          view="pseudo"
          width="max"
          type="button"
          onClick={onSigninButtonClick}
          container={<Link to={ROUTES.SIGNIN} />}
        >
          {TEXT.SIGNUP.SIGNIN}
        </Button>
      </Form__Field>
    </Form>
  );
};
