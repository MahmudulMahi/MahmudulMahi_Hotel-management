import { useEffect, useState } from "react"

import { getRole } from "../api/auth"
import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query"

const useRole = () => {

  const { user,loading } = useAuth()
  // const { user,loading } = useAuth()
  
  // const [role, setRole] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
    
  //   getRole(user?.email).then(data => {
  //     setRole(data.role)
  //     setLoading(false)
  //   })
  // }, [user])
  // return [role,loading]

  const {data: role,isLoading}=useQuery({
    enabled:!loading && !!user?.email,
    queryFn:async () => await getRole(user?.email),
    // querykey role is just key for identifi
    queryKey:['role'],
  })
  return [role,isLoading]

}

export default useRole