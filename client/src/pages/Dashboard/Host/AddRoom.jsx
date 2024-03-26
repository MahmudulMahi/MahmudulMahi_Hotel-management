import React, { useState } from 'react';
import AddRoomForm from '../../../components/Form/AddRoomForm';
import { Helmet } from 'react-helmet-async';
import { imageUpload } from '../../../api/utils';

const AddRoom = () => {

  const [dates,setDates] =useState({
    startDate:new Date(),
    endDate:new Date(),
    key:'selection'
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const location = form.location.value
    const category = form.category.value
    const title = form.title.value
    const to = 'dates.endDate'
    const from = 'dates.startDate'
    const price = form.price.value
    const guests = form.total_guest.value
    const bathrooms = form.bathrooms.value
    const description = form.description.value
    const bedrooms = form.bedrooms.value
    const image = form.image.files[0]

    const image_url=await imageUpload(image)


  }

  // date-range

  const handleDates=ranges =>{
    setDates(ranges.selection)
  }
  return (
    <div>
      <Helmet>
        <title> Add Room | Dashboard</title>
      </Helmet>
      <AddRoomForm handleDates={handleDates} handleSubmit={handleSubmit} dates={dates}></AddRoomForm>
    </div>
  );
};

export default AddRoom;