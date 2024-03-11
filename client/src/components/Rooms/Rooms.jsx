import React, { useEffect, useState } from 'react';
import Card from './Card';

const Rooms = () => {
  const [rooms,setRooms]=useState([])
  console.log(rooms)

  useEffect(()=>{
    fetch('/rooms.json')
    .then(res => res.json())
    
    .then(data => setRooms(data))
    
    
  },[])
  return (
    <div>
      {
        rooms.map(room=><Card key={room.id} room={room}></Card>)
      }
    </div>
  );
};

export default Rooms;