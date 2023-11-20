import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import useAuth from "../hooks/useAuth";
import Loading from "./Loading";
import useAdminRefreshToken from "../hooks/useAdminRefreshToken";

const PersistLogin = ({ allowedRole }) => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useAdminRefreshToken(allowedRole);
  const context = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (!context?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>{context?.persist ? <Outlet /> : isLoading ? <Loading /> : <Outlet />}</>
  );
};

export default PersistLogin;
