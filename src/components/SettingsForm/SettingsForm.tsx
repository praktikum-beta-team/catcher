import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEXT } from "constants/text";
import { useForm } from "components/UI/Form/useForm";
import { Form, Input, Button, Form__Field } from "components/UI";
import { authOperations, authSelectors } from "store/auth";
import type { IUserRequest } from "services/api";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { defaults } from "lodash/fp";

const defaultValues = {
  firstName: "",
  secondName: "",
  displayName: "",
  login: "",
  email: "",
  phone: "",
};

export const SettingsForm: FC = () => {
  const userSettings = useSelector(authSelectors.getUserSettings);

  const [handleSubmit, fieldProps] = useForm(defaults(defaultValues, userSettings));
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  const handleSettingsFormSubmit = useCallback(
    (values: typeof defaultValues) => {
      const { firstName, secondName, displayName, login, email, phone } = values;

      const preparedData: IUserRequest = {
        first_name: firstName,
        second_name: secondName,
        display_name: displayName,
        login,
        email,
        phone,
      };

      dispatch(authOperations.changeUserDataRequest(preparedData));
    },
    [dispatch]
  );

  return (
    <Form onSubmit={handleSubmit(handleSettingsFormSubmit)} error={error}>
      <Form__Field>
        <Input {...fieldProps("firstName")} placeholder={TEXT.SETTINGS.FIRST_NAME} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("secondName")} placeholder={TEXT.SETTINGS.SECOND_NAME} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("displayName")} placeholder={TEXT.SETTINGS.DISPLAY_NAME} />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("email")} placeholder={TEXT.SETTINGS.EMAIL} type="text" />
      </Form__Field>
      <Form__Field>
        <Input {...fieldProps("phone")} placeholder={TEXT.SETTINGS.PHONE} type="tel" />
      </Form__Field>
      <Form__Field>
        <Button view="action" width="max">
          {TEXT.SETTINGS.SUBMIT}
        </Button>
      </Form__Field>
      <Form__Field>
        <Button type="button" view="pseudo" width="max" container={<Link to={ROUTES.LOGOUT} />}>
          {TEXT.SETTINGS.LOGOUT}
        </Button>
      </Form__Field>
    </Form>
  );
};
