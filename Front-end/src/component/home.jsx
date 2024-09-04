import React, { useEffect, useInsertionEffect } from "react";
import mainimg from "../asset/mainimg.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import cake_1 from "../asset/c_1.png";
import cake_2 from "../asset/c_2.png";
import cake_3 from "../asset/c_3.png";
// import BG from"../asset/BG.png"
import { Link } from "react-router-dom";
import special_1 from "../asset/special_1.jpg";
import special_2 from "../asset/special_2.jpg";
import special_3 from "../asset/special_3.jpg";
// import special_4 from "../asset/special_4.jpg";
import cupcake from "../asset/c_4.png";
import cake from "../asset/D1.jpg";
import delivery1 from "../asset/M_1.jpg";
import delivery2 from "../asset/M_2.jpg";
import delivery3 from "../asset/M_3.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import discount from "../asset/discount.png";
import Hanimeli from "./bakeshop";
import Nav from "./nav";
import { ToastContainer, toast} from 'react-toastify'
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export default function Home() {
  
  const notify = () => {
    toast("Logged In Successfully.. ")
    
  };



useEffect(() => {
  localStorage.removeItem("token");
  notify()
  
  
}, []);



  const Card = () => {
    return <div className="w-48 h-48 bg-black mt-24 rounded-3xl"></div>;
  };
  return (
    
    <div className="overflow-y-hidden">
      {/*  */}
   
      <ToastContainer/>
      {/*  */}
      <div className="grid grid-cols-2 gap-4">
        <img src={mainimg} alt="mainad" className="w-full mt-14" />
        <div className="flex flex-col justify-center">
          <p className="text-4xl md:text-6xl font-bold mt-10 md:mt-20 ">
            Delicious Cakes <br /> to Order
          </p>
          <br />
          <Link to="/ordernow">
            {" "}
            <button className="mt-4 bg-white hover:bg-red-300 hover:rounded-lg px-7 py-2 duration-70 hover:scale-105 font-bold border-2 border-black">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex ml-[85%] gap-5 text-3xl -mt-24 mr-8 text-red-700">
        <span>
          <IoLogoWhatsapp />
        </span>
        <span>
          <FaInstagram />{" "}
        </span>
        <span>
          <FaXTwitter />
        </span>
      </div>

      <div className="w-[100%] h-[22rem] mt-2 rounded-t-3xl bg-red-800 ">
        <div className=" flex gap-2 pl-10  ">
          <Card>
            <div className="w-48 h-48 bg-black  rounded-3xl"></div>
          </Card>
          <Card>
            <div className="w-48 h-48 bg-black  rounded-3xl"></div>
          </Card>
          <Card>
            <div className="w-48 h-48 bg-black  rounded-3xl"></div>
          </Card>
          <Card>
            <div className="w-48 h-48 bg-black  rounded-3xl"></div>
          </Card>
          <Card>
            <div className="w-48 h-48 bg-black rounded-3xl"></div>
          </Card>
          <Card>
            <div className="w-48 h-48 bg-black  rounded-3xl"></div>
          </Card>
          <Card>
            <div className="w-48 h-48 bg-black  rounded-3xl"></div>
          </Card>
        </div>
      </div>

      <div>
        <div className="flex mt-10  ml-12 ">
          <div className="w-[45%] pt-14">
            <p className="text-red-800"> See Collection</p>
            <p className="text-3xl font-bold  ">OUR FINE HOME MADE CAKE</p>
            <p>
              we hardly get time to spend with our loved ones. Gifts, especially
              cakes and flowers are the best way to express your love. Even if
              you can't be with them, you can at least send cake online and show
              your love
            </p>
            <button className="bg-red-800 p-2 rounded-lg text-white">
              Read more
            </button>
          </div>

          <div className="flex  ml-4  gap-5 maincard">
            <span className=" text-center ">
              <img
                src={cake_3}
                alt=""
                className="w-[6rem] ml-24 hover:scale-150 "
              />
              <p className="text-red-800 font-bold  ">Wedding Cake</p>
              <p className="text-sm mx-4">
                we hardly get time to spend with our loved ones. Gifts,
                especially cakes
              </p>
              <button className="underline underline-offset-8 decoration-red-800 pt-1">
                Order Now{" "}
              </button>{" "}
            </span>
            <span className=" text-center ">
              <img
                src={cake_2}
                alt=""
                className="w-[6rem] ml-24 hover:scale-150 "
              />
              <p className="text-red-800 font-bold">Cup Cake</p>
              <p className="text-sm mx-5">
                we hardly get time to spend with our loved ones. Gifts,
                especially cakes
              </p>
              <button className="underline underline-offset-8 decoration-red-800 pt-1">
                Order Now{" "}
              </button>{" "}
            </span>
            <span className=" text-center ">
              <img
                src={cake_1}
                alt=""
                className="w-[6rem] ml-24 hover:scale-150 "
              />
              <p className="text-red-800 font-bold  ">Birthday Cake</p>
              <p className="text-sm mx-5">
                we hardly get time to spend with our loved ones. Gifts,
                especially cakes
              </p>

              <button className="underline underline-offset-8 decoration-red-800 pt-1">
                Order Now{" "}
              </button>
            </span>
          </div>
          {/* <div> <img src={BG} alt="" class=' char ' /></div> */}
        </div>
      </div>
      {/* section of cupcake */}
      <div className="flex">
        <div>
          <img src={cupcake} alt="" />
        </div>
        <div className="">
          <h2 className="text-red-800 text-4xl pb-3">Want to see more</h2>
          <h1 className="text-6xl pb-4">Hand Made Cake For Your Taste</h1>
          <p className="text-md pr-9 pb-3 ">
            {" "}
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. <br /> Even
            if you can't be with them,
          </p>
          <div className="grid grid-cols-2 gap-5 ml-12 mr-16">
            <div className="w-76 h-40 bg-red-300 ">
              {" "}
              <p className="text-lg  text-red-600 font-bold ">1200</p>{" "}
              <p className="pt-9 text-sm text-center px-4">
                we hardly get time to spend ones. <br /> Gifts, especially cakes
              </p>{" "}
              <p
                className="underline underline-offset-4
               pt-8 text-sm pl-3 "
              >
                Read more
              </p>
            </div>
            <div className="w-76 h-40 bg-red-200 ">
              {" "}
              <p className="text-lg text-red-600 font-bold pl-3">1200+</p>{" "}
              <p className="pt-9 text-sm text-center">
                we hardly get time to spend ones. <br /> Gifts, especially cakes
              </p>{" "}
              <p className="underline underline-offset-4 pt-8 text-sm pl-3 ">
                Read more
              </p>{" "}
            </div>
            <div className="w-76 h-40 bg-red-200">
              {" "}
              <p className="text-lg text-red-600 font-bold pl-3">600</p>{" "}
              <p className="pt-9 text-sm text-center">
                we hardly get time to spend ones. <br /> Gifts, especially cakes
              </p>{" "}
              <p className="underline underline-offset-4 pt-8 pl-3 text-sm">
                Read more
              </p>{" "}
            </div>
            <div className="w-76 h-40 bg-red-300">
              {" "}
              <p className="text-lg font-bold text-red-600 pl-3">500</p>{" "}
              <p className="pt-9 text-sm text-center">
                we hardly get time to spend ones. <br /> Gifts, especially cakes
              </p>{" "}
              <p className="underline underline-offset-4 pt-8 text-sm pl-3 ">
                Read more
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section -1  kishor */}

      {/* kishore */}

      <h1 className="text-[2.5rem] font-bold flex justify-center ">
        Our Special Dish
      </h1>
      <hr className="w-[35rem] h-3 mx-auto my-4 bg-red-800 border-9 rounded-lg dark:bg-red-700" />
      <p className="px-[13rem] text-lg mt-6 mb-[4rem] text-center">
        we hardly get time to spend with our loved ones. Gifts, especially cakes
        and flowers are the best way to express your love. Even if you can't be
        with them, you can at least send cake online and show your lovewe hardly
        get time to spend with our loved ones. Gifts, especially cakes and
        flowers are the best way to express your love
      </p>

      <div className="flex justify-evenly items-center mb-10">
        <div className="justify-center flex flex-col items-center ">
          <img
            src={special_1}
            alt=""
            srcset=""
            height="330px"
            width="330px"
            className=" mb-8"
          />
          <p className="text-[2rem] font-bold mb-5 ">PROFESIONAL CHIEF</p>
          <p className="text-lg px-[4.3rem] text-center">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and show your
            love
          </p>
        </div>

        <div className="justify-center flex flex-col items-center">
          <img
            src={special_2}
            alt=""
            srcset=""
            height="330px"
            width="330px"
            className=" mb-8"
          />
          <p className="text-[2rem] font-bold mb-5">FRESH FRUITS</p>
          <p className="text-lg px-[4.3rem]  text-center">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and show your
            love
          </p>
        </div>

        <div className="justify-center flex flex-col items-center ">
          <img
            src={special_3}
            alt=""
            srcset=""
            height="330px"
            width="330px"
            className=" mb-8"
          />
          <p className="text-[2rem] font-bold mb-5">MILK SHACK</p>
          <p className="text-lg px-[4.3rem] text-center ">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and show your
            love
          </p>
        </div>
      </div>

      {/* mvk  */}
      <div className="flex">
        <div className="text-left ml-10 mt-8 pt-20 ">
          <h1 className="text-5xl font-bold pl-16  leading-tight">
            BE THE FASTEST IN <br /> DELIVERING YOUR
          </h1>
          <h2 className="text-red-700 font-bold text-5xl pl-16 leading-tight">
            CAKE
          </h2>
          <p className="pl-16">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers <br />
            are the best way to express your love. Even if you can't be with
            them, you can at <br />
            least send cake online and show your love
          </p>
          <div className="pl-16 pt-4">
            <button className="border-2 mr-2 pr-4 pl-4 pt-1 pb-1 rounded-3xl mt-4 bg-red-700 text-white  ">
              Order now{" "}
            </button>
            <button className="border-2 pr-4 pl-4 rounded-3xl pt-1 pb-1 bg-gray-300">
              Watch now
            </button>
          </div>
        </div>
        <div className="ml-20">
          <img
            src={cake}
            alt=""
            height="600px"
            width="600px"
            className="pl-40"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-9 space-y-2 flex-col">
        <h2 className="mt-10 text-red-700 ">OUR SERVICE FOR OUR CUSTOMER</h2>
        <h1 className="text-2xl text-center">
          YOUR FAVOURITE FOOD DELIVERY <br /> PARTNER
        </h1>
      </div>
      <div className="flex justify-evenly items-center mb-10">
        <div className="justify-center flex flex-col items-center ">
          <img
            src={delivery3}
            alt=""
            srcset=""
            height="330px"
            width="330px"
            className="mt-10"
          />
          <h2 className=" text-2xl font-bold  ">FASTEST HOME DELEVERY</h2>
          <p className="text-sm text-center px-12">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and show your
            love
          </p>
        </div>

        <div className="justify-center flex flex-col items-center">
          <img
            src={delivery2}
            alt=""
            srcset=""
            height="330px"
            width="330px"
            className=""
          />
          <p className=" text-2xl font-bold ">FRESH FRUITS</p>
          <p className="text-sm text-center px-12">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and show your
            love
          </p>
        </div>

        <div className="justify-center flex flex-col items-center">
          <img
            src={delivery1}
            alt=""
            srcset=""
            height="330px"
            width="330px"
            className="mt-8"
          />
          <p className="text-2xl  font-bold">MILK SHACK</p>
          <p className="text-sm  text-center px-12 ">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and show your
            love
          </p>
        </div>
      </div>

      {/* vishnu */}

      <div className="ml-[50px] mt-[40px]">
        <p className="text-red-800 text-xl">Our Menu</p>
        <p className="head text-3xl font-bold">Menu That Always</p>
        <p className="head text-3xl font-bold">Make You Fall InLove</p>
      </div>

      <div className=" flex justify-end gap-5 -mb-16 mr-5">
        <div className="w-14 h-14 rounded-full bg-red-800">
          <MdKeyboardArrowLeft className="text-white text-4xl mt-2 ml-2" />
        </div>
        <div className="w-14 h-14 rounded-full bg-red-800">
          <MdKeyboardArrowRight className="text-white text-4xl mt-2 ml-2" />
        </div>
      </div>
      <div className="flex gap-[50px] justify-between">
        <div>
          <div className="items-center flex gap-[30px] mt-[100px]">
            <div className="border-2 h-[100px] w-[100px] ml-[60px]"></div>
            <span className="title font-bold text-3xl">CAKES</span>
          </div>

          <div className="flex items-center gap-[30px]">
            <div className="border-2 h-[100px] w-[100px] ml-[60px] mt-8"></div>
            <span className="title font-bold text-3xl">MILK SHAKE</span>
          </div>

          <div className="flex items-center gap-[30px]">
            <div className="border-2 h-[100px] w-[100px] ml-[60px] mt-8"></div>
            <span className="title font-bold text-3xl">FRUITS CAKE</span>
          </div>

          <div className="flex items-center gap-[30px]">
            <div className="border-2 h-[100px] w-[100px] ml-[60px] mt-8"></div>
            <span className="title font-bold text-3xl">ROLL CAKE</span>
          </div>
        </div>

        <div className="mt-[100px]">
          <div className="border-none h-[90px] w-[7px] bg-red-800 rounded-xl absolute">
            <div className="line border-none h-[400px] w-[7px] mt-[80px] bg-red-200 relative"></div>
          </div>
        </div>

        <div className="border-2 border-red-700 h-[430px] w-[350px] rounded-3xl mt-[110px]"></div>

        <div className="border-2 border-red-700 h-[430px] w-[350px] rounded-3xl mt-[110px]"></div>
      </div>
      <div className="">{Discount()}</div>
      <div>{Hanimeli()}</div>
    </div>
  );
}

// import { IoIosArrowDroprightCircle } from "react-icons/io";

export function Discount() {
  return (
    <>
      {/* <img src={discount} className='absolute w-'></img> */}
      <div className="">
        <div className="relative">
          <img src={discount} className="w-[100%] h-[800px] ml-[30px] "></img>
          <div className="">
            <button className="absolute  border-2 border-red-800 rounded-lg px-[1rem] py-[6px] top-[390px] left-[760px] font-semibold text-xs">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
