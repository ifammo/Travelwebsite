import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";


const Desti = () => {
  return (
    <div className="grid grid-rows-none lg:grid-cols-3 px-14 mt-16 gap-8 ">
        <div className="col-span-2  row-span-2 ">
          <div className="mb-10"> 
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laborum.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error facilis enim molestias voluptatibus neque, adipisci nesciunt tenetur! Vero accusamus, in minima cum placeat voluptas alias itaque laudantium vel sint perferendis blanditiis excepturi error rerum laboriosam. Neque porro totam deleniti?</p>
          </div>
           <div className="grid md:grid-cols-2 lg:mt-24 gap-4 ">
            <div className="flex flex-col  md:flex-row items-center gap-5  bg-slate-100 border rounded-lg p-3 ">
                    <div>
                        <button>
                           <RiCustomerService2Fill size={100} className="text-cyan-600" />
                        </button>
                    </div>
                   
                    <div className="flex flex-col gap-4 text-center">
                      <h1>Call Know</h1>
                      <p>Lorem, ipsum dolor sit amet </p>
                    </div>
              </div>
              <div className="flex flex-col  md:flex-row items-center gap-5 bg-slate-100 border rounded-lg p-3 ">
                    <div>
                        <button>
                           <MdOutlineTravelExplore size={100} className="text-cyan-600" />
                        </button>
                    </div>
                   
                    <div className="flex flex-col gap-4 text-center">
                      <h1>Search</h1>
                      <p>Lorem, ipsum dolor sit amet </p>
                    </div>
              </div>
             
           </div>
           
        </div>
        <div className="col-span-2  row-span-2 lg:col-span-1 lg:row-span-1">
          <div className="text-center border rounded-md bg-gray-50 p-4">
            <p>GET AN ADDITIONAL 10 % OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-black text-white p-2 rounded-sm">BOOK KNOW AND SAFE</p>
          </div>
          <form className="py-3 w-full">
            <div className="flex flex-col my-2">
               <label htmlFor="">Destination</label>
              <select className="w-full border rounded-md">
                <option>Marrakesch</option>
                <option>Ouarzazate</option>
                <option>Zanzibar</option>
                <option>Borabora</option>
                <option>Greece</option>
                <option>Agadir</option>
                <option>Merzouga</option>
              </select>
            </div>
            <div className="flex flex-col my-2">
              <label>Check-In</label>
              <input className="border rounded-md" type="date" name="" id="" />
            </div>
            <div className="flex flex-col my-2">
               <label>Check-Out</label>
              <input className="border rounded-md" type="date" name="" id="" />
            </div>
           
            <button className="my-4 w-full bg-blue-500  hover:bg-cyan-500 py-3 rounded-lg">Rates & Availabilities </button>
          </form>
        </div>
    </div>
  )
}

export default Desti