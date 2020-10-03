import React, { FC } from "react";

import { Header } from "../Header";

export const Layout: FC = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
  </>
);
