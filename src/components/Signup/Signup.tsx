import React, { FC } from "react";
import { useHistory } from "react-router";

import { Button, Input, Form, Modal } from "../index";

import "./Signup.scss";

export const Signup: FC = () => {
  const { push } = useHistory();

  return (
    <div className="signup__wrapper">
      <Modal title="Регистрация">
        <Form>
          <div className="form-field">
            <Input placeholder="Имя" />
          </div>
          <div className="form-field">
            <Input placeholder="Фамилия" />
          </div>
          <div className="form-field">
            <Input placeholder="Придумайте логин" />
          </div>
          <div className="form-field">
            <Input placeholder="Адрес электронной почты" />
          </div>
          <div className="form-field">
            <Input placeholder="Придумайте пароль" />
          </div>
          <div className="form-field">
            <Input placeholder="Повторите пароль" />
          </div>
          <div className="form-field">
            <Button view="action">Зарегистрироваться</Button>
          </div>
          <div className="ford-field">
            <Button view="pseudo" onClick={() => push("/")}>
              Войти с паролем
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
