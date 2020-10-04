import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { IUserRequest } from "utils/request/types";
import { TEXT } from "constants/text";
import { Form, Input, Button, FormField } from "components/UI";
import { useForm } from "hooks/useForm";
import { authOperations, authSelectors } from "services/auth";

export const SettingsForm: FC = () => {
  const settings = useSelector(authSelectors.getCurrentSettings);
  const [, handleSubmit, fieldProps] = useForm(settings);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const handleSettingsFormSubmit = useCallback((values: IUserRequest) => {
    dispatch(authOperations.changeUserData(values));
  }, []);

  return (
    <Form onSubmit={handleSubmit(handleSettingsFormSubmit)} error={error}>
      <FormField>
        <Input
          {...fieldProps("first_name")}
          placeholder={TEXT.SETTINGS.FIRST_NAME}
        />
      </FormField>
      <FormField>
        <Input
          {...fieldProps("second_name")}
          placeholder={TEXT.SETTINGS.SECOND_NAME}
        />
      </FormField>
      <FormField>
        <Input
          {...fieldProps("display_name")}
          placeholder={TEXT.SETTINGS.DISPLAY_NAME}
        />
      </FormField>
      <FormField>
        <Input
          {...fieldProps("email")}
          placeholder={TEXT.SETTINGS.EMAIL}
          type="text"
        />
      </FormField>
      <FormField>
        <Input
          {...fieldProps("first_name")}
          placeholder={TEXT.SETTINGS.PHONE}
          type="tel"
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
