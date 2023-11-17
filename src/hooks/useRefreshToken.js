import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = (role) => {
  const navigate = useNavigate();
  const context = useAuth();
  const refreshToken = localStorage.getItem("refresh");
  const location = useLocation();

  const refresh = async () => {
    try {
      if (!refreshToken) {
        // Handle the case when refreshToken is missing in local storage
        throw new Error("Refresh token not found");
      }

      const response = await axios.post("/auth/users/verify/refresh", {
        refreshToken: refreshToken,
      });

      if (response.data) {
        context?.setAuth((prev) => {
          return {
            ...prev,
            accessToken: response?.data?.accessToken,
            role: "user",
          };
        });
      }
      return response?.accessToken;
    } catch (err) {
      console.error(err);

      if (role?.includes("user")) {
        navigate("/user-login", {
          state: {
            prevURL: location.pathname,
          },
        });
      } else if (role?.includes("admin") || role?.includes("superAdmin")) {
        navigate("/admin-login", {
          state: {
            prevURL: location.pathname,
          },
        });
      }
    }
  };

  return refresh;
};

export default useRefreshToken;
