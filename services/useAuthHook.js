import { useState, useEffect } from "react";

export function useAuthHook() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(">> use token", token);
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });
  return isAuth;
}
