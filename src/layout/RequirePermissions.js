import { Outlet, useSearchParams } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Loading from "../components/Loading"
import useRefreshToken from "../hooks/useRefreshToken"
import { useEffect, useState } from "react"

const RequirePermissions = ({ allowedRole }) => {
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const permissions = searchParams[0].get("permissions")
  const { auth, persist } = useAuth()
  const refresh = useRefreshToken(allowedRole)

  useEffect(() => {
    let isMounted = true
    const allowedPermissions = ["admin", "guest", "contributor"]

    if (allowedPermissions.includes(permissions)) {
      isMounted && setIsLoading(false)
    } else {
      const verifyRefreshToken = async () => {
        try {
          await refresh()
        } catch (err) {
          console.error(err)
        } finally {
          isMounted && setIsLoading(false)
        }
      }

      !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
    }

    return () => {
      isMounted = false
    }
  }, [permissions, auth, refresh])

  console.log({auth})

  if (permissions) {
    return <>{isLoading ? <Loading /> : <Outlet />}</>
  } else {
    return <>{!persist ? <Outlet /> : isLoading ? <Loading /> : <Outlet />}</>
  }
}

export default RequirePermissions
