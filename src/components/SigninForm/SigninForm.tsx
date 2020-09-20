import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, FormField, Input, Button } from "components/UI";
import { useForm } from "hooks/useForm";
import { signinRequest } from "services/auth/actions";
import { errorSelector } from "services/auth/selectors";
import { useHistory } from "react-router";
import { ROUTES } from "constants/routes";

const TEXT = {
  LOGIN: "Введите логин",
  PASSWORD: "Введите пароль",
  SUBMIT: "Войти",
  REGISTER: "Зарегистрироваться",
};

interface ISigninForm {
  login: string;
  password: string;
}

const initialValues: ISigninForm = {
  login: "",
  password: "",
};

export const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const [data, handleSubmit, handleChange] = useForm(initialValues);
  const error = useSelector(errorSelector);
  const { push } = useHistory();

  const onSubmit = (values: ISigninForm) => {
    dispatch(signinRequest(values));
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
          onClick={() => {
            push(ROUTES.SIGNUP);
          }}
        >
          {TEXT.REGISTER}
        </Button>
      </FormField>
    </Form>
  );
};
