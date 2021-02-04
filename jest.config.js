module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleDirectories: ["node_modules", "./", "src"],
  moduleNameMapper: {
    "\\.(css|svg|jpg)$": "identity-obj-proxy",
  },
};
