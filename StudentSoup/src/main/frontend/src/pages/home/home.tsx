import Navbar from '../../components/navbar/Navbar'
import MainSearch from '../../components/mainsearch/MainSearch'

const home = () => {
  return (
    <div className='w-full h-full bg-cyan-300 z-50'>
        <Navbar/>
        <MainSearch/>
    </div>
  )
}

export default home