export const serialize = (cookies: Record<string, string>) => {
  const cookieKeys = Object.keys(cookies);

  const serializedCookie = cookieKeys.reduce(
    (acc, cookieKey, index) =>
      acc +
      encodeURIComponent(cookieKey) +
      (cookies[cookieKey] === null
        ? ""
        : `=${encodeURIComponent(cookies[cookieKey])}${index < cookieKeys.length - 1 ? ";" : ""}`)
  );

  return serializedCookie;
};
