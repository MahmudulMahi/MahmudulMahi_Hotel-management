import { useEffect, useState } from "react"

import { getRole } from "../api/auth"
import useAuth from "./useAuth"

const useRole = () => {

  const { user } = useAuth()

  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getRole(user?.email).then(data => {
      setRole(data.role)
      setLoading(false)
    })
  }, [user])
  return [role,loading]

}

export default useRole