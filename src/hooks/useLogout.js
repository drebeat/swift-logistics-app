import axios from "../api/axios"
import useAuth from "./useAuth"

const useLogout = () => {
  const { setAuth, auth } = useAuth()
  const refreshToken = localStorage.getItem("refresh")

  const logout = async () => {
    const res = await axios
      .post("/logout", {
        role: auth.role,
        refresh_token: refreshToken,
      })
      .catch(error => console.error(error))
    if (res) {
      localStorage.removeItem("refresh")
      setAuth({})
    }
  }

  return logout
}

export default useLogout
