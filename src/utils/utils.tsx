export const createCookie = (name: string, body: object, timeAlive: number) => {
  const expire = new Date();
  expire.setHours(expire.getHours() + timeAlive);

  document.cookie = `${name}=${JSON.stringify(
    body
  )};expires=${expire.toUTCString()}`;
};

export const getParsedCookie = (name: string) => {
  if (document.cookie === "") return null;
  if (!document.cookie.includes(`${name}=`)) return null;
  const cookies =
    document.cookie
      .split(";")
      .find((x) => x.includes(`${name}=`))
      ?.replace(`${name}=`, "") || "";

  return JSON.parse(cookies);
};

export const deleteAllCookies = () => {
  document.cookie = "";
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
