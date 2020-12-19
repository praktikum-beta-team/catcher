import path from "path";

export const rootDir = path.resolve(__dirname, "..");

const { NODE_ENV = "development", PORT = 3001 } = process.env;

export const IS_DEVELOPMENT = NODE_ENV === "development";

export { PORT };
