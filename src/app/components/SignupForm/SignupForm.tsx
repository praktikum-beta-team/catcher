import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "app/constants/text";
import { Button, Input, Form, useForm, FormField } from "app/components/UI";
import { ROUTES } from "app/constants/routes";
import { authOperations, authSelectors } from "app/store/auth";
import type { ISignupRequest } from "app/services/api";
import type { IUser } from "app/types/models/user";

interface ISignupForm
  extends Required<Pick<IUser, "firstName" | "secondName" | "login" | "email" | "phone">> {
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
      <FormField>
        <Input {...fieldProps("firstName")} placeholder={TEXT.SIGNUP.FIRST_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("secondName")} placeholder={TEXT.SIGNUP.SECOND_NAME} />
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
          {...fieldProps("passwordConfirm")}
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
