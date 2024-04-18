import axiosSecure from ".";

// create paymentIntent

export const createPaymentIntent =async price =>{
  const {data} = await axiosSecure.post('/create-payment-intent',price)
  return data
}

// save bookinginfo in db
export const saveBookingInfo =async paymentInfo =>{
  const {data} = await axiosSecure.post('/bookings',paymentInfo)
  return data
}

// update room status
export const updateStatus =async (id,status) =>{
  const {data} = await axiosSecure.patch(`/rooms/status/${id}`,{status})
  return data
}

// get all booking for a guest by email

export const getBookings=async email=>{
  const {data}=await axiosSecure(`bookings?email=${email}`)
  return data
}
// get all booking for a host by email
export const getHostBookings=async email=>{
  const {data}=await axiosSecure(`bookings/host?email=${email}`)
  return data
}