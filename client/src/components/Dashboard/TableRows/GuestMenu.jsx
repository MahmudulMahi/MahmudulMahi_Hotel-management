import React from 'react';
import MenuItem from '../Sidebar/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { FaListOl } from 'react-icons/fa';

const GuestMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='My Bookings'
        address='my-bookings'
      />

    </>
  );
};

export default GuestMenu;