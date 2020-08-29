import React, { FC } from "react";
import { useHistory } from "react-router";

import { Button, Input, Form, Modal } from "components";

import "./Signin.scss";

export const Signin: FC = () => {
  const { push } = useHistory();

  return (
    <div className="signin__wrapper">
      <Modal title="Вход">
        <Form>
          <div className="form-field">
            <Input placeholder="Введите логин" />
          </div>
          <div className="form-field">
            <Input type="password" placeholder="Введите пароль" />
          </div>
          <div className="form-field">
            <Button view="action">Войти</Button>
          </div>
          <div className="form-field">
            <Button view="pseudo" onClick={() => push("/signup")}>
              Зарегистрироваться
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
