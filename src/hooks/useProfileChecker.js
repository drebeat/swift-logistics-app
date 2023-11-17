import axios from "../api/axios";
import useAuth from "./useAuth";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const useProfileChecker = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const from = location?.state?.from;

  const profileChecker = async () => {
    if (from === "/user-login") {
      const response = await axios
        .get(`users/profile_check?email=${auth.email}`)
        .catch((err) => console.error(err.response));
      if (response?.data?.data?.profileCompleted === false)
        Swal.fire({
          toast: true,
          icon: "info",
          title: "Kindly complete your profile.",
          position: "top-right",
          timer: 5000,
          showConfirmButton: false,
        });
    }
  };

  return profileChecker;
};

export default useProfileChecker;
