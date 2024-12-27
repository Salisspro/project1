import './App.css'
import FireStore from './components/FireStore'
import Heeder from './components/Header'
import Home from './components/Home'
import Modal from './components/Modal'
function App() {

  return (
    <div className='bg-zinc-800 h-[100%] p-[32px] shadow-[0_0_10px_white]'>
      <Heeder />
      <div className='rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5 bg--800 opacity-90 p-[20px]'>
        <Home />

        <FireStore />
      </div>
      <Modal />
    </div>
  )
}

export default App












// import { FaRegHeart } from "react-icons/fa"
// import { MdHomeFilled } from "react-icons/md";
// import { IoBookmarkOutline } from "react-icons/io5";


{/* <FaRegHeart />
<MdHomeFilled  className='text-3xl'/>
<IoBookmarkOutline />

 */}