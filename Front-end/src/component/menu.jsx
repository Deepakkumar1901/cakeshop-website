import '../menu.css';
import discount from '../assest/discount.jpg';
// import { IoIosArrowDroprightCircle } from "react-icons/io";


export function Discount() {

    return (

        <>
            {/* <img src={discount} className='absolute w-'></img> */}
            <div className=''>
                <img src={discount} className='w-[100%] h-[800px] ml-[30px] absolute'></img>
                <div className='relative'>
                    <button className='absolute border-2 border-red-800 rounded-lg px-[10px] py-[6px] top-[390px] left-[695px] font-semibold text-sm'>ORDER NOW</button>
                </div>
            </div>

        </>
    )
}