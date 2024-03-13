// import MyCarousel from './MyCarousel'
import FeaturedNews from './FeaturedNews'
import MyCarousel from './MyCarousel'
import Navbar from './Navbar'
import OurAmbition from './OurAmbition'
import SelectedWork from './SelectedWork'
// import ReactCarousel from './ReactCarousel'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MyCarousel/>
        <OurAmbition/>
        <SelectedWork/>
        <FeaturedNews/>
    </div>
  )
}

export default Home
