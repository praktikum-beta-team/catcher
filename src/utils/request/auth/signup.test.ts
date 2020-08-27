import { signUp } from "./signup";

it("signup", async () => {
  await signUp(
    {
      firstName: "qw",
      secondName: "qw",
      login: "qw",
      email: "qw@mail.ru",
      password: "qw",
      phone: "+7495777777",
    },
    (data) => {
      expect(data.status).toEqual(200);
    },
    (e) => {
      expect(e.response?.status).toEqual(400);
    }
  );
});
