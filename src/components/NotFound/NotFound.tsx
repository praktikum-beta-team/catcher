import React, { FC } from "react";

import { Error } from "components/Error";
import { Layout } from "components/UI";

const TEXT = {
  MESSAGE: "Ошибка 404. Нет такой страницы",
};

export const NotFound: FC = () => (
  <Layout>
    <Error title={TEXT.MESSAGE} />
  </Layout>
);
