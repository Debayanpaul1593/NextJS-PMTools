import { loadAsString } from "../storage";
export function requireAuthentication(gssp) {
  return async function (ctx) {
    let userIsAuthenticated = false;
    let token = loadAsString("token");
    //let token = 'abcdefghi';
    console.log(">>token: ", token);
    if (token) {
      userIsAuthenticated = true;
    }
    if (!userIsAuthenticated) {
      return {
        redirect: {
          destination:  "/signin",
          permanent: false,
        },
      };
    }
    return await gssp(ctx);
  };
}
