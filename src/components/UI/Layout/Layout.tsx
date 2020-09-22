import React, { FC } from "react";

import { Header } from "components/UI";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
