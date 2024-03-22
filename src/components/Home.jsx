// import MyCarousel from './MyCarousel'
import Demo from './Demo'
import FeaturedNews from './FeaturedNews'
import Footer from './Footer'
import MyCarousel from './MyCarousel'
import Navbar from './Navbar'
import OurAmbition from './OurAmbition'
import SelectedWork from './SelectedWork'



const Home = () => {

 
  return (
    <div>
        <Navbar/>
        <MyCarousel />
        <OurAmbition/>
        <SelectedWork/>
        <FeaturedNews/>
        <Footer/>
        <Demo/>
    </div>
  )
}

export default Home
