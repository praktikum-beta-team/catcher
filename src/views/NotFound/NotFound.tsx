import React, { FC } from "react";

import { Error } from "components/Error";
import { StandardLayout } from "components";
import { TEXT } from "constants/text";

export const NotFound: FC = () => (
  <StandardLayout>
    <Error title={TEXT.NOT_FOUND} />
  </StandardLayout>
);
