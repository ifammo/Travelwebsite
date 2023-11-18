import ouarzazate from '../assets/ouarzazate.jpeg'
import ouarzazate2 from '../assets/ouarzazate2.jpeg'
import marrakech from '../assets/marrakech.jpeg'
import merzouga from '../assets/merzouga.jpeg'
import chefchaouen from '../assets/chefchaouen.jpeg'
import zanzibar from '../assets/zanzibar.jpeg'


const Bestplace = () => {
  return (
    <div className='grid grid-cols-3 px-14 gap-4 my-20'>
                <img className='w-full h-full object-cover rounded-md' src={ouarzazate} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={marrakech} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={merzouga} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={chefchaouen} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={zanzibar} alt="" />
                <img className='w-full h-full object-cover rounded-md' src={ouarzazate2} alt="" />

    </div>
  )
}

export default Bestplace