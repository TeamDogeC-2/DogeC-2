import {useCallback, useEffect, useRef, useState} from 'react'
import './navbar.css'
import Modal from '../modal/modal'

const Navbar = () => {
  const [isModal, setModal] = useState<Boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setModal(!isModal);
  }, [isModal])
  
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickOutside = (e: any) => {
      if(isModal && !modalRef.current?.contains(e.target)){
        setModal(false)
      }
    }
    document.addEventListener('mousedown', clickOutside)
    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [isModal])

  return (
    <div className='navbar'>
      <div className='topLeft'>
        reddit
      </div>
      <div className='topRight'>
        <div className='FAQcontainer'>
          <span className='FAQ'>
            FAQ
          </span>
        </div>
        <button className='Login' onClick={onClickToggleModal}>
          Login
        </button>
        {isModal === true ? <Modal/> : null}
      </div>
    </div>
  )
}

export default Navbar