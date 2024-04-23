import React from 'react';
import MenuItem from '../Sidebar/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { FaListOl } from 'react-icons/fa';
import {  MdOutlineManageHistory } from 'react-icons/md'

const HostMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Room'
        address='add-room'
      />
      <MenuItem
        icon={FaListOl}
        label='My Listing'
        address='my-listings'
      />
         <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
    </>
  );
};

export default HostMenu;