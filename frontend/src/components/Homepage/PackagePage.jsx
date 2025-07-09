import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import usePackagesHome from "./PackagesUnit/PackagesHome.jsx";
import { MdCurrencyRupee } from "react-icons/md";



function PackagePage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const CompletePackagesData = usePackagesHome();

  console.log(id,"============id")


  const CurrentPackage = CompletePackagesData.length > 0 ? CompletePackagesData.filter(item => item._id == id ) : [];
// console.log(CurrentPackage,"<===================CurrentPackage")
        if(CurrentPackage.length === 0){
                return <p>Loading</p>
            }





  if (!CurrentPackage) return <p>Loading item...</p>;

  return (
  
    <div>
      {/* <h2>Item ID: {id}</h2> */}
      {CurrentPackage.map((data,index)=>{
        return(
          <>
           <div className='w-[80vw] mx-auto'>
            <div>
              <p className='font-bold text-3xl bg-[#0D3F63] text-white p-2 rounded-md shadow-2xl'>{data.title}</p>
            </div>
           
            <div className=' p-2 flex '>
              <div className=' p-2 h-full w-[30%] flex flex-col items-end '>
                
                  <img src={data.image_url} id={data.image_id} className='h-[50vh] w-[80%] shadow-2xl rounded-md' />
                  <p className='font-bold self-center'>{data.destinations}</p>
                

              </div>
              <div className=' p-2 w-[70%] flex flex-col justify-between items-stretch'>
                <div className='flex justify-start py-2'>
              <p className=' text-sm text-blue-500 font-bold border-2 rounded-2xl  px-5'>{data.travelcategory}</p>
            </div>
                
                <div className='flex gap-5'>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                       {data.duration} Validity
                    </span>
                  </button>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                     By {data.travelMode}
                    </span>
                  </button>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                     {data.availability} Slots Only
                    </span>
                  </button>
                    
                </div>
                 <p className='text-gray-500'>{data.description}</p>
            
                <p><span className='text-cyan-800 font-bold'>Additionals :</span> {data.inclusions}</p>
                
         

            <div className='flex gap-6 items-center justify-end'>
              <p className='text-xl flex items-center font-bold'><MdCurrencyRupee size={15}/>{data.prices}</p>

              <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 ">
{/* <svg class="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg> */}
Book Package Now
</button>
            </div>

              </div>

            </div>
</div>
          </>
        )
      })}
      
    </div>
  );
}

export default PackagePage;
