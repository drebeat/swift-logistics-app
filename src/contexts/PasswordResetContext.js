import { createContext, useState } from "react"

export const PasswordResetContext = createContext()

const PasswordResetContextProvider = ({ children }) => {
  const [role, setRole] = useState("")

  return (
    <PasswordResetContext.Provider value={{ role, setRole }}>
      {children}
    </PasswordResetContext.Provider>
  )
}

export default PasswordResetContextProvider
