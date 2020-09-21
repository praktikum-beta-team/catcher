import React, { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";

import { Form, AvatarInput, Input, Button, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { userSelector } from "services/auth";
import { IUserResponse } from "utils/request/auth";

import "./SettingsForm.css";

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

interface IChangeUserRequest {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
}

const handleSettingsFormSubmit = (data: IChangeUserRequest) => {
  console.log(data);
};

const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
  const uploadFile = event.target.value;
  /**
   * Диспатчим экшен
   */
  console.info(uploadFile);
};

export const SettingsForm: FC = () => {
  const user = useSelector(userSelector);

  const [data, handleSubmit, handleChange] = useForm(user as IUserResponse);

  return (
    <div className="settings-layout">
      <div className="settings-layout__column">
        <AvatarInput name="avatar" src={user?.avatar} onChange={handleAvatarChange} />
      </div>
      <div className="settings-layout__column">
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
      </div>
    </div>
  );
};
