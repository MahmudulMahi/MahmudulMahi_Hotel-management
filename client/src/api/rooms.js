import axiosSecure from "."


// fetch all rooms
export const getAllRooms=async()=>{
  const {data} = await axiosSecure('/rooms')
  return data
}

// fetch single room

export const getRoom=async id =>{
  const {data} = await axiosSecure(`/room/${id}`)
  return data
}