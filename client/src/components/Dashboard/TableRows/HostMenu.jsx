import React from 'react';
import MenuItem from '../Sidebar/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { FaListOl } from 'react-icons/fa';

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
    </>
  );
};

export default HostMenu;