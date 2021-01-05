import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "app/constants/text";
import { useForm } from "app/components/UI/Form/useForm";
import { Form, Input, Button, FormField } from "app/components/UI";
import { authOperations, authSelectors } from "app/store/auth";
import type { IUserRequest } from "app/services/api";
import { IUser } from "app/types/models/user";

type UserSettings = Required<
  Pick<IUser, "firstName" | "secondName" | "displayName" | "login" | "email" | "phone">
>;

const defaultValues: UserSettings = {
  firstName: "",
  secondName: "",
  displayName: "",
  login: "",
  email: "",
  phone: "",
};

export const SettingsForm: FC = () => {
  const settings = useSelector(authSelectors.getUserSettings);
  const [handleSubmit, fieldProps] = useForm({ ...defaultValues, ...settings });
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const handleSettingsFormSubmit = useCallback(
    (values: UserSettings) => {
      const data: IUserRequest = {
        first_name: values.firstName,
        second_name: values.secondName,
        display_name: values.displayName,
        login: values.login,
        email: values.email,
        phone: values.phone,
      };
      dispatch(authOperations.changeUserDataRequest(data));
    },
    [dispatch]
  );

  return (
    <Form onSubmit={handleSubmit(handleSettingsFormSubmit)} error={error}>
      <FormField>
        <Input {...fieldProps("firstName")} placeholder={TEXT.SETTINGS.FIRST_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("secondName")} placeholder={TEXT.SETTINGS.SECOND_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("displayName")} placeholder={TEXT.SETTINGS.DISPLAY_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("email")} placeholder={TEXT.SETTINGS.EMAIL} type="text" />
      </FormField>
      <FormField>
        <Input {...fieldProps("phone")} placeholder={TEXT.SETTINGS.PHONE} type="tel" />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SETTINGS.SUBMIT}
        </Button>
      </FormField>
    </Form>
  );
};
