import Navbar from '../../components/navbar/Navbar'
import MainSearch from '../../components/mainsearch/MainSearch'

const home = () => {
  return (
    <div className='w-full h-full bg-[url("./img/mainlogo.jpg")] bg-cover z-50'>
      <div className='w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.1)] z-[51]'>
        <Navbar/>
        <MainSearch/>
      </div>
    </div>
  )
}

export default home