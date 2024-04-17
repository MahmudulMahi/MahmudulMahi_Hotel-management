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
  const {data} = await axiosSecure.patch(`/room/status/${id}`,{status})
  return data
}