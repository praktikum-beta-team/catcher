import React, { FC } from "react";

import { Form, AvatarInput, Input, Button, FormField } from "components/UI";
import { useForm } from "hooks/useForm";

import "./SettingsForm.css";
import mockData from "./mockData";

const TEXT = {
  FIRST_NAME: "Введите имя",
  SECOND_NAME: "Введите фамилию",
  EMAIL: "Введите адрес электронной почты",
  CURRENT_PASSWORD: "Действующий пароль",
  NEW_PASSWORD: "Введите новый пароль",
  NEW_PASSWORD_CONFIRM: "Повторите новый пароль",
  SUBMIT: "Сохранить",
};

interface ISettingsForm {
  firstName: string;
  secondName: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const { firstName, secondName, email } = mockData;

const initialValues: ISettingsForm = {
  firstName,
  secondName,
  email,
  oldPassword: "",
  newPassword: "",
  newPasswordConfirm: "",
};

const cb = (data: ISettingsForm) => {
  console.log(data);
};

export const SettingsForm: FC = () => {
  const [data, handleSubmit, handleChange] = useForm(initialValues);

  return (
    <Form className="settings-form" onSubmit={handleSubmit(cb)}>
      <div className="settings-form__column">
        <AvatarInput name="avatar" onChange={handleChange} />
      </div>
      <div className="settings-form__column">
        <FormField>
          <Input
            name="firstName"
            value={data.firstName}
            placeholder={TEXT.FIRST_NAME}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Input
            name="secondName"
            value={data.secondName}
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
          <Input
            name="oldPassword"
            value={data.oldPassword}
            placeholder={TEXT.CURRENT_PASSWORD}
            type="password"
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Input
            name="newPassword"
            value={data.newPassword}
            placeholder={TEXT.NEW_PASSWORD}
            type="password"
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Input
            name="newPasswordConfirm"
            value={data.newPasswordConfirm}
            placeholder={TEXT.NEW_PASSWORD_CONFIRM}
            type="password"
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Button view="action" width="max">
            {TEXT.SUBMIT}
          </Button>
        </FormField>
      </div>
    </Form>
  );
};
