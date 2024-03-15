/* eslint-disable react/prop-types */

import Calender from './Calender';
import Button from '../../components/Button/Button';

const RoomReservation = ({room}) => {

  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const calculateTotalPrice = () => {
  //     if (!room || !room.from || !room.to || !room.price) return;
      
  //     const fromDate = new Date(room.from);
  //     const toDate = new Date(room.to);

  //     if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
  //       console.error('Invalid date format');
  //       return;
  //     }

  //     const totalDays = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)); // Calculate total days
  //     const totalPrice = totalDays * room.price; // Calculate total price
  //     setTotalPrice(totalPrice);
  //   };

  //   calculateTotalPrice();
  // }, [room]);

  // const [value,setValue]=useState({
  //   startDate:new Date(room?.from),
  //   endDate:new Date(room?.to),
  //   key:'selection',
  // })
  // const totalDays = parseInt(
  //   formatDistance(new Date(room?.to) , new Date(room?.from)).split(' ')[0]
  // )
  // const totalPrice=totalDays * room?.price
  // console.log(totalPrice)
  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white  '>
      <div className='flex items-center gap-1 p-4'>
      <div className='text-2xl font-semibold'>
        ${room.price}
      </div>
      <div className='font-light text-neutral-600'>
        night
      </div>
      </div>
      <hr />
      <div className='flex justify-center'>
      <Calender ></Calender>
      </div>
      <hr />
      <div className='p-4'>
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex item-center justify-between font-semibold text-lg">
      <div>
      Total
      </div>
      <div>
      $ {room?.price}
      </div>
      </div>
    </div>
  );
};

export default RoomReservation;