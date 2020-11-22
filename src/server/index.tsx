import express from "express";
import morgan from "morgan";

import { handleRender } from "server/middlewares";
import { TEXT } from "server/constants/text";

const PORT = process.env.PORT || 3001;
const app = express();

const handleStartup = () => {
  // TODO: Кажется, в этот коллбэк должна передаваться ошибка, но TS говорит, что у него нет параметров

  // if (error) {
  //   console.error(error)
  //   return
  //  }
  console.log(TEXT.RUNNING_ON.replace("%s", PORT.toString()));
};

app
  .use(morgan("tiny"))
  .use(express.static("./dist"))
  .get("/*", handleRender)
  .listen(PORT, handleStartup);
