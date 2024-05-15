import React, { useState } from 'react';
import MenuItem from '../Sidebar/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { FaListOl } from 'react-icons/fa';
import useRole from '../../../hooks/useRole'
import { GrUserAdmin } from 'react-icons/gr'
import useAuth from '../../../hooks/useAuth';
import HostModal from '../../Model/HostRequestModal';
import { becomeHost } from '../../../api/auth';
import toast from 'react-hot-toast';
const GuestMenu = () => {
  const [role] = useRole()
  const {user}=useAuth()
  const [isOpen,setIsOpen]=useState(false)

  const closeModal=()=>{
    setIsOpen(false)
  }

  const modelHandler=async () =>{
    try{
     const data=await becomeHost(user?.email)
     console.log(data);
     if(data.modifiedCount > 0){
      toast.success('success,wait for admin confirmation')
     }else{
      toast.success('plesse,wait for admin approval')
     }
    }catch(err){
      console.log(err);
    }finally{
      setIsOpen(false)
    }
  }
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='My Bookings'
        address='my-bookings'
      />
            {role === 'guest' && (
        <div onClick={()=>setIsOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )}
    <HostModal closeModal={closeModal} isOpen={isOpen} modelHandler={modelHandler}></HostModal>
    </>
  );
};

export default GuestMenu;