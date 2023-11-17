import { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Navbar =()=>{
    const [nav, setNav]= useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
    return(
        <div className='flex justify-between items-center h-20 px-3 '>
            <h1 className='md:text-4xl'>Beaches</h1>
            <ul className=' hidden md:flex '>
                <li><a href="">Home</a></li>
                <li><a href="">Destinations</a></li>
                <li><a href="">Book</a></li>
                <li><a href="">View</a></li>
            </ul>
            <div className='hidden md:flex gap-2'>
                <BiSearch />
                <BsPerson />
            </div>
            {/*Hmaburger */}
            <div onClick={handleNav} className='md:hidden z-10 hover:bg-slate-300 p-2 rounded-full cursor-pointer '>
                {nav?<AiOutlineClose size={20} />: <HiOutlineMenuAlt4 size={20} /> }
                
            </div>
           {/*Mobile Navbar */}
           <div onCanPlay={handleNav} className={nav? 'absolute left-0 top-0 py-4 text-center w-full bg-slate-100 border rounded-lg':'absolute left-[-100%]'}>
             <ul>
                <h1 className='p-14'> Beaches</h1>
                <li className='hover:bg-slate-300 border-slate-400 rounded-lg'><a href="">Home</a></li>
                <li className='hover:bg-slate-300 border-slate-400 rounded-lg'><a href="">Destinations</a></li>
                <li className='hover:bg-slate-300 border-slate-400 rounded-lg'><a href="">Book</a></li>
                <li className='hover:bg-slate-300 border-slate-400 rounded-lg'><a href="">View</a></li>
            </ul>
            <div className='flex flex-col mx-5' >
                <button>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between mx-6 my-8'>
                <FaFacebook className='hover:text-blue-600 icons' />
                <FaTwitter className='hover:text-blue-500 icons'/>
                <FaYoutube className='hover:text-red-600 icons'/>
                <FaInstagram className='hover:text-amber-700 icons'/>
                <FaLinkedin className='hover:text-blue-600 icons'/>
            </div>
           </div>
        </div>
    )
}
export default Navbar 