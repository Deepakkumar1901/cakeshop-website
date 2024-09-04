import { CiMail } from "react-icons/ci";
// import'../child.css';
import image1 from'../asset/blendoriginal.png';
import image2 from'../asset/bloom.png';
import image3 from'../asset/cameo.png';
import image4 from'../asset/bit.png';
import image5 from'../asset/char.png';
import image6 from'../asset/histudio.png';
import image7 from'../asset/homebase.png';
import image8 from'../asset/liberies.png';
import image9 from'../asset/web.png';
import image10 from'../asset/modernhealth.png';
import image11 from'../asset/zebra.png';
import image12 from'../asset/focus.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";






export default function Hanimeli(){

    return(

        <>
        {/* mainone  */}
        
        <div className="w-full h-[550px] bg-red-700 mt-[50px] pt-[10px] pl-[22px]">

            <div className="child2 flex h-[70px] w-[700px] px-[12px] ml-[8px] mt-4  items-center  justify-between rounded-xl">
             <span className="flex items-center gap-1"><CiMail className="text-white text-2xl"/><h1 className="text-lg  font-medium">name@domain.com</h1></span>
             <h1 className="bg-red-800 px-[55px] py-[14px] text-white font-medium rounded-lg">Send</h1>
            </div>


           {/* row 1  */}
            <div className="flex items-center pl-[150px] pt-[70px] gap-[100px]">

             <img src={image1} className="h-[30px]"></img>
             <img src={image2} className="h-[30px]"></img>
             <img src={image3} className="h-[20px]"></img>
             <img src={image4} className="h-[28px]"></img>
             <img src={image5} className="h-[30px]"></img>
             <img src={image6} className="h-[30px]"></img>

         
            </div>




            {/* row 2  */}
            <div className="flex items-center mt-8 pl-[130px] gap-[90px]">

                <img src={image12} className="h-[120px]  "></img>
                <img src={image7} className="h-[22px]"></img>
                <img src={image8} className="h-[30px]"></img>
                <img src={image9} className="h-[25px]"></img>
                <img src={image10} className="h-[70px]"></img>
                <img src={image11} className="w-[100px]"></img>
            </div>





            {/* row 3  */}
            <div className="px-[150px] mt-[60px] text-white text-sm">
              <p>Free Fire is a free to play battle royale game developed and published by Garena for Android and iOS. It was released o8 December 2017. Itbecame the most downloaded</p>
              <p>mobilegame globally in 2019 and has over 1billion downloads on Google Play storeFree Fire is a free to play battle royale game developed and published by Garena for Android </p>
              <p>and iOS. It was released o8 December 2017. Itbecame the most downloaded mobilegame globally in 2019 and has over 1billion downloads on Google Play store</p>
            </div>

           
       

            {/* 4th row */}
            <div className="pr-[35px] pt-[35px] flex justify-end gap-[10px] text-gray-200 text-4xl items-center">
              <FaFacebookF className="FaFacebookF px-[10px]" />
              <FaTwitter className="FaTwitter px-[8px]"/>
              <FaInstagram className="FaInstagram px-[8px]" />
              <FaLinkedinIn className="FaLinkedinIn px-[8px]" />
              <CiYoutube className="CiYoutube px-[6px]"/>

            </div>
          



        </div>




        
        
      </>
    )
}