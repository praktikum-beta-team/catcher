import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Button, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { userSelector, changeProfileRequest } from "services/auth";
import { IUserResponse } from "utils/request/auth";
import { IChangeProfileRequest } from "utils/request/user";

const TEXT = {
  FIRST_NAME: "Введите имя",
  SECOND_NAME: "Введите фамилию",
  EMAIL: "Введите адрес электронной почты",
  CURRENT_PASSWORD: "Действующий пароль",
  NEW_PASSWORD: "Введите новый пароль",
  NEW_PASSWORD_CONFIRM: "Повторите новый пароль",
  SUBMIT: "Сохранить",
};

/**
 * TODO:
 * - унести интерфейсы в utils/request
 * - реализовать смену пароля (возможно, на отдельной странице)
 */

export const SettingsForm: FC = () => {
  const user = useSelector(userSelector);
  const [data, handleSubmit, handleChange] = useForm(user as IUserResponse);
  const dispatch = useDispatch();

  const handleSettingsFormSubmit = (values: IChangeProfileRequest) => {
    dispatch(changeProfileRequest(values));
  };

  return (
    <Form onSubmit={handleSubmit(handleSettingsFormSubmit)}>
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
          name="email"
          value={data.email}
          placeholder={TEXT.EMAIL}
          type="text"
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
