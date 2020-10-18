import React, { FC } from "react";

import { Header } from "../Header";

export const Layout: FC = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
