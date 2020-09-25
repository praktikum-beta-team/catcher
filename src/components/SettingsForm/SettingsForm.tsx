import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { IUserRequest } from "utils/request/types";
import { TEXT } from "constants/text";
import { Form, Input, Button, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { authOperations, authSelectors } from "services/auth";

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
          placeholder={TEXT.SETTINGS.FIRST_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="second_name"
          value={data.second_name}
          placeholder={TEXT.SETTINGS.SECOND_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="display_name"
          value={data.display_name ?? ""}
          placeholder={TEXT.SETTINGS.DISPLAY_NAME}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="email"
          value={data.email}
          placeholder={TEXT.SETTINGS.EMAIL}
          type="text"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Input
          name="phone"
          value={data.phone}
          placeholder={TEXT.SETTINGS.PHONE}
          type="tel"
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SETTINGS.SUBMIT}
        </Button>
      </FormField>
    </Form>
  );
};
