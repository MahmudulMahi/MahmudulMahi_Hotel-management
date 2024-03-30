import React from 'react';
import { RiAdminFill } from "react-icons/ri";
import MenuItem from '../Sidebar/MenuItem';


const AdminMenu = () => {
  return (
    <>
          <MenuItem
        icon={RiAdminFill}
        label='Manage Users'
        address='manage-users'
      />
    </>
  );
};

export default AdminMenu;