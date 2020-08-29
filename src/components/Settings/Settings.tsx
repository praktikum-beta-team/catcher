import React, { FC } from "react";

import { Header, Form, Input, AvatarInput, Button } from "components";

import "./Settings.scss";
import mockData from "./mockData";

export const Settings: FC = () => {
  const { firstName, secondName, email } = mockData;

  return (
    <>
      <Header />
      <div className="settings">
        <div className="settings__wrapper">
          <div className="settings__inner">
            <h1 className="settings__title">Профиль</h1>
            <Form className="settings-form">
              <div className="settings-form__column">
                <AvatarInput />
              </div>
              <div className="settings-form__column">
                <div className="form-field">
                  <Input placeholder="Введите имя" value={firstName} />
                </div>
                <div className="form-field">
                  <Input placeholder="Введите фамилию" value={secondName} />
                </div>
                <div className="form-field">
                  <Input placeholder="Введите адрес электронной почты" value={email} />
                </div>
                <div className="form-field">
                  <Input placeholder="Действующий пароль" type="password" />
                </div>
                <div className="form-field">
                  <Input placeholder="Введите новый пароль" type="password" />
                </div>
                <div className="form-field">
                  <Input placeholder="Повторите новый пароль" type="password" />
                </div>
                <div className="form-field">
                  <Button view="action">Сохранить</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
