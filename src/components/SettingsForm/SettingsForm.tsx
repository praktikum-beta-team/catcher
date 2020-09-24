import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { IUserRequest } from "utils/request/types";
import { Form, Input, Button, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { authOperations, authSelectors } from "services/auth";

const TEXT = {
  FIRST_NAME: "Введите имя",
  SECOND_NAME: "Введите фамилию",
  DISPLAY_NAME: "Введите певдоним",
  EMAIL: "Введите адрес электронной почты",
  PHONE: "Введите номер мобильного телефона",
  CURRENT_PASSWORD: "Действующий пароль",
  NEW_PASSWORD: "Введите новый пароль",
  NEW_PASSWORD_CONFIRM: "Повторите новый пароль",
  SUBMIT: "Сохранить",
};

export const SettingsForm: FC = () => {
  const settings = useSelector(authSelectors.getCurrentSettings);
  const [data, handleSubmit, handleChange] = useForm(settings);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const handleSettingsFormSubmit = (values: IUserRequest) => {
    dispatch(authOperations.changeUserData(values));
  };

  return (
    <Form onSubmit={handleSubmit(handleSettingsFormSubmit)} error={error}>
      <FormField>
        <Input
          name="first_name"
          value={data.first_name}
          placeholder={TEXT.FIRST_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="second_name"
          value={data.second_name}
          placeholder={TEXT.SECOND_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="display_name"
          value={data.display_name ?? ""}
          placeholder={TEXT.DISPLAY_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="email"
          value={data.email}
          placeholder={TEXT.EMAIL}
          type="text"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="phone"
          value={data.phone}
          placeholder={TEXT.PHONE}
          type="tel"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SUBMIT}
        </Button>
      </FormField>
    </Form>
  );
};
