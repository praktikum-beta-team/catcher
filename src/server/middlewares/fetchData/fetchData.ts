import type { RequestHandler } from "express";
import axios from "axios";

import { serialize } from "server/utils/cookie";

export const fetchData: RequestHandler = ({ cookies }, res, next) => {
  axios
    .get("https://ya-praktikum.tech/api/v2/auth/user", {
      withCredentials: true,
      headers: { Cookie: serialize(cookies) },
    })
    .then(({ data }) => {
      console.log(data);
      next();
    })
    .catch((error) => {
      console.log(error);
      next();
    });
};
