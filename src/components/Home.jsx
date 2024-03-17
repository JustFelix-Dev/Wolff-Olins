// import MyCarousel from './MyCarousel'
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
       
    </div>
  )
}

export default Home
