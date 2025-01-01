
import IMG from '../assets/Programming Clipart Professional Software Developer Cartoon Vect.png'

export default function Heeder() {
  return (
    <div className="flex items-center justify-between gap-[5rem] p-[20px] -mt-[40px] ">
      <p className='font-semibold text-slate-300'> <span>WELCOM   </span>

      TO  OUR SERVICE </p>
      <img
        className='w-[80px]'
        src={IMG} alt="" />
    </div>
  )
}

