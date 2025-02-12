import './App.css'
import NavBar from './components/NavBar/NavBar'
import Headlines from './components/Headlines/Headlines'
import IphoneMockupSection from './components/IphoneMockupSection/IphoneMockupSection'
import DownloadSection from './components/DownloadSection/DownloadSection'
import HouseCleaningService from './components/HouseCleaningService/HouseCleaningService'
import AutomotiveCleaningService from './components/AutomotiveCleaningService/AutomotiveCleaningService'
import CollabSection from './components/CollabSection/CollabSection'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Headlines />
      <IphoneMockupSection />
      <DownloadSection />
      <HouseCleaningService />
      <div className="automotive-service-row">
        <AutomotiveCleaningService />
        <CollabSection />
      </div>
      <Carousel />
      <Footer />
    </div>
  )
}

export default App