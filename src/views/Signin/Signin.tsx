import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { getUser } from "store/auth/selectors";
import { cn } from "helpers/classname";
import { SigninForm } from "components/SigninForm";
import { Modal } from "components/UI";
import { ROUTES } from "constants/routes";
import { TEXT } from "constants/text";

import "./Signin.css";
import * as PromoImage from "./Signin__PromoImage.svg";

const b_ = cn("signin");

export const Signin: FC = () => {
  const user = useSelector(getUser);
  return user ? (
    <Redirect to={ROUTES.GAME} />
  ) : (
    <div className={b_()}>
      <div className={b_("layout")}>
        <aside className={b_("section")}>
          <img className={b_("promo-image")} src={PromoImage.default} alt="" />
        </aside>
        <main className={b_("section")}>
          <Modal title={TEXT.SIGNIN.TITLE}>
            <SigninForm />
          </Modal>
        </main>
      </div>
    </div>
  );
};
