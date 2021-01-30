import expressSession from "express-session";
import type { SessionOptions } from "express-session";

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

const sessionConfig: SessionOptions = {
  /**
   * Унести отсюда secret
   */
  secret: "q9**rfs#3g-_awhu11qw=gyjhl-m2g93u-h&%$q!m#20lob3ql",
  resave: false,
  saveUninitialized: false,
};

export const session = expressSession(sessionConfig);
