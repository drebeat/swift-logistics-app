import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useAdminRefreshToken = () => {
  const navigate = useNavigate();
  const context = useAuth();
  const refreshToken = localStorage.getItem("refresh");
  const location = useLocation();

  const refresh = async () => {
    try {
      if (!refreshToken) {
        throw new Error("Refresh token not found");
      }

      const response = await axios.post("/auth/admin/verify/refresh", {
        refreshToken: refreshToken,
      });

      if (response.data) {
        context?.setAuth((prev) => ({
          ...prev,
          accessToken: response?.data?.accessToken,
          role: "superAdmin",
        }));
        return response?.data?.accessToken;
      }
    } catch (err) {
      console.error(err);

      navigate("/admin-login", {
        state: {
          prevURL: location.pathname,
        },
      });
    }
  };

  return refresh;
};

export default useAdminRefreshToken;
