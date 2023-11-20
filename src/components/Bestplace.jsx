import ouarzazate from '../assets/ouarzazate.jpeg'
import ouarzazate2 from '../assets/ouarzazate2.jpeg'
import marrakech from '../assets/marrakech.jpeg'
import merzouga from '../assets/merzouga.jpeg'
import chefchaouen from '../assets/chefchaouen.jpeg'
import zanzibar from '../assets/zanzibar.jpeg'
import SelectCard from './SelectCard'


const Bestplace = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 px-14 gap-4 my-20'>
      <SelectCard bg={ouarzazate} text='Ait Ben Hadou' />
      <SelectCard bg={marrakech} text='Marrakech' />
      <SelectCard bg={ouarzazate2} text='Ouarzazate' />
      <SelectCard bg={merzouga} text='Merzouga' />
      <SelectCard bg={zanzibar} text='Zanzibar' />
      <SelectCard bg={chefchaouen} text='Chefchaouen' />
    </div>
  )
}

export default Bestplace