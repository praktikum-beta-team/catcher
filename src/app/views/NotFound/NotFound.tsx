import React, { FC } from "react";

import { Error } from "app/components/Error";
import { Layout } from "app/components/UI";
import { TEXT } from "app/constants/text";

export const NotFound: FC = () => (
  <Layout>
    <Error title={TEXT.NOT_FOUND} />
  </Layout>
);
