/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

// eslint-disable-next-line react/prop-types
const Calender = ({ value ,handleDateChange}) => {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay='false'
      onChange={handleDateChange}



    />
  )
}

export default Calender