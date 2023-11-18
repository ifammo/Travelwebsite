import video from '../assets/video.mp4'
import {BiSearch} from 'react-icons/bi'

const Hero =()=>{
    return(
        <div className='w-full h-screen'>
            <video className='w-full h-screen object-cover' src={video} autoPlay loop muted />
            <div className='absolute text-center justify-center flex flex-col top-0 w-full h-full '>
                <h1>First Class Travel</h1>
                <h2 className='text-2xl '>Top 1% Location Worldwide</h2>
               <form >
                <div className='flex justify-between items-center bg-white  max-w-[500px] md:w-[700px] w-full mx-auto  border rounded-md p-1 mt-3' >
                    <input className='bg-transparent focus:outline-none w-[300px] md:w-[600px]' type="text" placeholder='Search Destinations'  />
                    <button>
                        <BiSearch size={25} />
                    </button>
                </div>
                
               </form>
               
            </div>
        </div>
    )
}
export default Hero 