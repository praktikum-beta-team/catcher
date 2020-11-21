import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { useForm } from "components/UI/Form/useForm";
import { Form, Input, Button, FormField } from "components/UI";
import { authOperations, authSelectors } from "services/auth";
import { IUserRequest } from "utils/request/types";

const defaultValues: IUserRequest = {
  first_name: "",
  second_name: "",
  display_name: "",
  login: "",
  email: "",
  phone: "",
};

export const SettingsForm: FC = () => {
  const settings = useSelector(authSelectors.getSettings);
  const [handleSubmit, fieldProps] = useForm(settings ?? defaultValues);
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const handleSettingsFormSubmit = useCallback(
    (values: IUserRequest) => {
      dispatch(authOperations.changeUserData(values));
    },
    [dispatch]
  );

  return (
    <Form onSubmit={handleSubmit(handleSettingsFormSubmit)} error={error}>
      <FormField>
        <Input {...fieldProps("first_name")} placeholder={TEXT.SETTINGS.FIRST_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("second_name")} placeholder={TEXT.SETTINGS.SECOND_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("display_name")} placeholder={TEXT.SETTINGS.DISPLAY_NAME} />
      </FormField>
      <FormField>
        <Input {...fieldProps("email")} placeholder={TEXT.SETTINGS.EMAIL} type="text" />
      </FormField>
      <FormField>
        <Input {...fieldProps("first_name")} placeholder={TEXT.SETTINGS.PHONE} type="tel" />
      </FormField>
      <FormField>
        <Button view="action" width="max">
          {TEXT.SETTINGS.SUBMIT}
        </Button>
      </FormField>
    </Form>
  );
};
