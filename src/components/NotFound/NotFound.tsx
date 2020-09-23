import React, { FC } from "react";

import { Error } from "components";

const TEXT = {
  TITLE: "404",
  DETAILS: "Страница не найдена",
};

export const NotFound: FC = () => {
  return <Error title={TEXT.TITLE} details={TEXT.DETAILS} />;
};
