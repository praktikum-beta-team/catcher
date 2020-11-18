import React, { FC } from "react";

import { Error } from "components/Error";
import { Layout } from "components/UI";
import { TEXT } from "constants/text";

export const NotFound: FC = () => (
  <Layout>
    <Error title={TEXT.NOT_FOUND} />
  </Layout>
);
