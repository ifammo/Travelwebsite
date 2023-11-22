import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="bg-slate-100 w-full py-16" >
      <div className='flex flex-col mx-auto px-24 py-4'>
        <div className=' sm:flex justify-between items-center text-center '>
            <h1>Beaches</h1>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='hover:text-blue-600 icons' />
                <FaTwitter className='hover:text-blue-500 icons'/>
                <FaYoutube className='hover:text-red-600 icons'/>
                <FaInstagram className='hover:text-amber-700 icons'/>
                <FaLinkedin className='hover:text-blue-600 icons'/>
            </div>
            </div>
            <div className='flex justify-between'>
              <ul className='lg:flex'>
                <li>About</li>
                <li>Partnerships</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Advertising</li>
              </ul>
              <ul className='text-right lg:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Trabel</li>
                <li>Book</li>
                <li>View</li>
              </ul>
            </div>
          
        </div>
    </div>
  )
}

export default Footer