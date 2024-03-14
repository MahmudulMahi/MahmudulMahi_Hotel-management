

import { Helmet } from "react-helmet-async"
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
 
  return (
    <div>
      <Helmet>
        <title> Hotel | Hotel Management</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>

    </div>
  )
}

export default Home
