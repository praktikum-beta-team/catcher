import { signIn } from "./signin";

it("signin", async () => {
  await signIn(
    { login: "qw", password: "qw" },
    (data) => {
      expect(data.status).toEqual(200);
    },
    (e) => expect(e.response?.status).toEqual(401)
  );
});
