import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] =useSearchParams()
  const navigate=useNavigate()
  const handleClick=()=>{
    console.log(label)
  }
  params.get("category")
  return (
    <div onClick={handleClick} className='flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer '>
      {<Icon size={26}></Icon>}
      <div className='text-sm font-medium'>
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;