import React from "react";
import { useState } from "react";
import axios from 'axios'
import mainimg from "../asset/mainimg.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img10 from "../asset/img10.jpg";
import image_3 from "../asset/image_3.jpeg";
import image_2 from "../asset/image_2.jpeg";
import image_1 from "../asset/image_1.jpg";
import bg1 from "../asset/YCK1.jpg";
import bg2 from "../asset/YCK2.jpg";
import bg3 from "../asset/YCK3.jpg";
import bg4 from "../asset/YCK4.jpg";
import img_1 from "../asset/img137.png";
import img_2 from "../asset/img107.png";
import img_3 from "../asset/img121.png";
import img_4 from "../asset/img111.png";
import img_5 from "../asset/img99.jpg";
import img_6 from "../asset/img129.jpg";
import img_7 from "../asset/img126.jpg";
import img_8 from "../asset/img116.jpg";
import btn_1 from "../asset/arrow.png";
import fr_1 from "../asset/img66.png";
import fr_2 from "../asset/img76.png";
import img_bg_1 from "../asset/fruity_bg_1.png";
import img_bg_2 from "../asset/fruity_bg_2.png";
import img_bg_3 from "../asset/fruity_bg_3.png";
// import img_bg_4 from "../asset/fruity_bg_3.png";

export default function Ordernow() {

   const[name,setName]=useState("");
   const[email,setEmail]=useState("");
   const[mobileNo,setMobileNo]=useState("");
   const[date,setDate]=useState("");
   const[decorated,setDecorated]=useState("");
   const[address,setAddress]=useState("");
   const [message, setMessage] = useState('');
   const [showMessage, setShowMessage] = useState(false);


const handleSubmit=(e)=>{
  e.preventDefault();
    axios.post("http://localhost:5000/order",{name,email,mobileNo,date,decorated,address})
  .then((res)=>{
    console.log(res);
    // alert(res.data.message);
    setMessage(res.data.message);
    // || 'Order placed successfully'
    setShowMessage(true);
    alert(message)



        // Reset form fields
        setName('');
        setEmail('');
        setMobileNo('');
        setDate('');
        setDecorated('');
        setAddress('');








     // Hide the message after 5 seconds
     setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  })
  .catch((err)=>{
    console.log(err);
    setMessage('Error placing order');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  })
}







  const cakes = [
    { title: "Red Velvet", image: bg1, reviews: 360, rating: 4.9, price: 2.9 },
    {
      title: "Red Velvet Heartin",
      image: bg2,
      reviews: 360,
      rating: 4.9,
      price: 2.9,
    },
    {
      title: "Chocolate Cake",
      image: bg3,
      reviews: 360,
      rating: 4.9,
      price: 2.9,
    },
    {
      title: "Chocolate Strawberry Cake",
      image: bg4,
      reviews: 360,
      rating: 4.9,
      price: 2.9,
    },
  ];

  const Card = ({ imageUrl }) => (
    <div className="card-border rounded-lg mt-6 w-64 h-96 p-4 m-2 shadow-lg">
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-full object-cover img-border"
      />
    </div>
  );

  const imageUrls = [
    "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1038711/pexels-photo-1038711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div>
      <div className="grid grid-flow-col ml-[5rem]">
        <img src={mainimg} alt="mainad" className="w-120 mt-14 -mb-4" />
        <div>
          <p className="ml-40 text-[6rem] head mt-20  md:items-center ">
            Delicious Cakes <br /> to Order
          </p>
          <br />
          <Link to="/ordernow">
            {" "}
            <button className="ml-48 bg-white hover:bg-red-300 hover:rounded-lg px-7 py-2 duration-70 hover:scale-x-105 font-bold border-2 border-black">
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

      <div className="w-[100%] h-[4rem] shadow-2xl  shadow-red-950  mt-2 rounded-bl-3xl  bg-red-800 "></div>
      <br />
      <br />
      <div className="flex justify-around flex-wrap">
        {imageUrls.map((url, index) => (
          <Card key={index} imageUrl={url} />
        ))}
      </div>
      <div className="mt-7 flex justify-center text-2xl gap-10">
        <p>Home</p>
        <p>About Us</p>
        <p>Testimonial</p>
        <p>Contact</p>
      </div>
      <div className="flex mt-20 text-7xl justify-center gap-32">
        <div className="text-center">
          30+
          <br />
          <span className="text-2xl">Cake Variant</span>
        </div>
        <div className="text-center">
          20+
          <br />
          <span className="text-2xl">Donut Variant</span>
        </div>
        <div className="text-center">
          25+
          <br />
          <span className="text-2xl">Event Space</span>
        </div>
        <div className="text-center">
          40+
          <br />
          <span className="text-2xl">Global Achievement</span>
        </div>
      </div>
      <p className="text-red-800 mt-10 text-2xl text-center">Our Products</p>
      <p className="text-center text-4xl">From Top Quality Materials</p>
      <p className="text-center text-xl px-4">
        We hardly get time to spend with our loved ones. Gifts, especially cakes
        and flowers, are the best way to express your love.
      </p>
      <br />
      <br />

      <br />
      <div className="App ">
        <div className="card-container">
          {cakes.map((cake, index) => (
            <div key={index} className="card">
              <img src={cake.image} alt={cake.title} className="card-image" />
              <h3 className="card-title">{cake.title}</h3>
              <div className="card-rating">
                <span className="star">⭐</span>
                <span className="rating">{cake.rating}</span>
                <span className="reviews">({cake.reviews} reviews)</span>
              </div>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla
              </p>
              <div className="card-footer">
                <span className="price">${cake.price}</span>
                <button className="add-to-cart">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <div
        style={{ backgroundImage: ` url(${img10})` }}
        className="w-full h-[45em] bg-cover bg-center rounded-3xl flex items-center justify-center"
      >
        <div className="bg-gray-700 bg-opacity-65 rounded-3xl w-[75rem] h-[35rem] flex items-center justify-center">
          <div className="flex px-40 py-48 gap-10 mx-3">
            <div className="grid grid-cols-2 gap-2">
              <img
                src={image_3}
                alt="Gallery Image 1"
                className="w-full h-full"
              />
              <div>
                <img
                  src={image_2}
                  alt="Gallery Image 2"
                  className="w-full mb-2"
                />
                <img src={image_1} alt="Gallery Image 3" className="w-full" />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">About Us</h1>
              <p>
                We hardly get time to spend with our loved ones. Gifts,
                especially cakes and flowers are the best way to express your
                love. Even if you can't be with them, you can at least send cake
                online and show your love. We hardly get time to spend with our
                loved ones. Gifts, especially cakes and flowers are the best way
                to express your love. Even if you can't be with them, you can at
                least send cake online and show your love.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      {/* jervin */}
      <br />
      <br />

      {/* title  */}
      <div className="flex flex-col items-center">
        <h2 className="text-red-500">
          <span className="text-2xl">O</span>UR&nbsp;
          <span className="text-2xl">C</span>ATEGORY
        </h2>
        <br />
        <p className="text-xs mt-2">
          we hardly get time to spend with our loved ones. Gifts, especially
          cakes and<br></br>
          flowers are the best way to express
        </p>
      </div>
      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
  <div className="relative">
    <img
      src={img_bg_1}
      className="w-full h-[200px]"
      style={{ maxWidth: "none", width: "100%", height: "200px" }}
    />
    <img
      src={img_1}
      className="object-scale-down h-48 w-full absolute top-[20px] left-1/2 transform -translate-x-1/2"
    />
    <p className="text-lg font-medium text-center mt-2">FRUITY CAKE</p>
  </div>
  <div className="relative">
    <img
      src={img_bg_2}
      className="w-full h-[200px]"
      style={{ maxWidth: "none", width: "100%", height: "200px" }}
    />
    <img
      src={img_2}
      className="object-scale-down h-48 w-full absolute top-[20px] left-1/2 transform -translate-x-1/2"
    />
    <p className="text-lg font-medium text-center mt-2">ROLL CAKE</p>
  </div>
  <div className="relative">
    <img
      src={img_bg_3}
      className="w-full h-[200px]"
      style={{ maxWidth: "none", width: "100%", height: "200px" }}
    />
    <img
      src={img_3}
      className="object-scale-down h-48 w-full absolute top-[20px] left-1/2 transform -translate-x-1/2"
    />
    <p className="text-lg font-medium text-center mt-2">FRUITY BUN</p>
  </div>
  <div className="relative">
    <img
      src={img_bg_2}
      className="w-full h-[200px]"
      style={{ maxWidth: "none", width: "100%", height: "200px" }}
    />
    <img
      src={img_4}
      className="object-scale-down h-48 w-full absolute top-[20px] left-1/2 transform -translate-x-1/2"
    />
    <p className="text-lg font-medium text-center mt-2">FRUITY PITS</p>
  </div>
</div>

      {/* Form */}
      
      <div className="grid grid-cols-2 w-full relative mt-20">
        <img src={img_5} className=" ml-3 w-76 -mt-2 " />
        <div className="absolute z-10 w-[5.5rem] h-[5.5rem] bg-green-400 rounded-full left-[40px]"></div>

        <div className="absolute z-10 w-[9.5rem] h-[9.5rem] bg-yellow-400 rounded-full left-[440px]"></div>
        <div className="absolute z-10 w-[4.5rem] h-[3.3rem] bg-red-600 rounded-[50%] top-[200px] left-[380px]"></div>
        <div className="absolute z-10 w-[3.5rem] h-[3.3rem] bg-blue-400 rounded-full top-[340px] left-[400px]"></div>

        <div className="w-full max-w-xl ">
          {/* <img src={fr_2} className=" z-10 w-[23rem] ml-[16.5rem] rotate-60 absolute top-[-230px] right-[-190px] " /> */}

          <form onSubmit={handleSubmit}
            className="w-full mt-[4.5rem] shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 bg-pink-100 relative"
            id="usrform"
          >
            <img
              src={fr_1}
              className=" z-0 w-[15rem] ml-[16.5rem] rotate-45 absolute top-[-80px] left-[-350px] "
            />
            <div className="relative">
              <input
                className="bg-red-700 text-white w-[100%] rounded-2xl p-4 mb-3 text-lg placeholder-white "
                type="text"
                placeholder="NAME:"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-red-700 text-white w-full rounded-2xl p-4 mb-2 text-lg placeholder-white "
                type="email"
                placeholder="EMAIL ID:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <input
                className="bg-red-700 text-white w-full rounded-2xl p-4 mb-3 text-lg placeholder-white "
                type="number"
                placeholder="MOBILE NO:"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
              <input
                className="bg-red-700 text-white w-full rounded-2xl p-4 mb-3 text-lg placeholder-white"
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <select
                id="cake"
                name="cake"
                className="bg-red-700 text-white w-full rounded-2xl p-4 mb-3 text-lg"
                onChange={ (e) => setDecorated(e.target.value)}
                value={decorated}
              >
                <option value="ice cake">CAKE TYPE</option>
                <option value="choco">choco</option>
                <option value="decorated">decorated</option>
                <option value="lava">lava</option>
              </select>
              <textarea
                className="bg-red-700 text-white w-full rounded-2xl placeholder-white p-4 mb-3 text-lg"
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
                placeholder="ADDRESS:"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
           
           
            <button 
        type="submit"
        className="mb-7 text-red-500 w-16 h-16 ml-[28.5rem] filter-red" 
        style={{
          filter: "sepia(1) hue-rotate(-50deg) saturate(14) brightness(0.9)"
        }}
      >
        <img 
          src={btn_1} 
          alt="Submit" 
        />
      </button>
             <img
              src={fr_1}
              className="w-[10rem] ml-[16.5rem] rotate-45 absolute bottom-[1px] left-[50px]"
            /> 
            <img
              src={fr_2}
              className="w-[10rem] ml-[16.5rem] rotate-130 absolute bottom-[-70px] right-[450px]"
            />
          </form>
          {showMessage && <div className="popup">{message}</div>}
        </div>
      </div>
      {/* rated */}
      
      <div className="p-8"></div>
      <div className="flex flex-col  items-center">
        <h2 className="">
          <span className="text-2xl">W</span>HAT &nbsp;
          <span className="text-2xl">P</span> EOPLE &nbsp;
          <span className="text-2xl">S</span>AY &nbsp;
          <span className="text-2xl">A</span>BOUT &nbsp;
          <span className="text-2xl">U</span>S
        </h2>
        <br></br>
        <p>
          we hardly get time to spend with our loved ones. Gifts, especially
          cakes and<br></br>
          flowers are the best way to express
        </p>
      </div>
      {/* cards */}

      
      <div className=" mt-20 w-[max]  mr-20  grid grid-cols-3 justify-center">
        <div className="ml-10">
          <div className="w-full ml-16 grid grid-cols-2">
            <img className="w-[6.5rem] ml-4 rounded-full" src={img_6} />
            <span className="-ml-[2.5rem] text-xl font-medium">
              Michael Wong
              <div class="mt-1 -ml-2 p-1 flex items-center mb-5 w-50 ">
                <svg
                  class="w-5 h-4 ms-1 text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-4 ms-1 text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-4 ms-1 text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-4 ms-1 text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-5 h-4 ms-1 text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </span>
            <p className="mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
              dolor fringilla volutpat lectus amet. Integer sed pretium odio
              lectus at malesuada sed eget nunc. Viverra malesuada viverra id
              vel tortor dui adipiscing.
            </p>
          </div>
        </div>
        <div className="w-full ml-20  grid grid-cols-2 ">
          <img className="h-[6.5rem] w-[6.5rem] rounded-full" src={img_7} />
          <span className="ml-[-4.5rem] text-xl font-medium">
            Avril Song
            <div class="mt-1 p-1 -ml-2 flex items-center w-50 ">
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </span>
          <p className="text-center mb-14">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc.
          </p>
        </div>

        <div className=" ml-10  grid grid-cols-2">
          <img className="h-[6.5rem] w-[6.5rem] rounded-full" src={img_8} />
          <span className="-ml-[3.5rem] text-xl font-medium">
            Jeanne Wood
            <div class="mt-1 p-1 -ml-2 flex items-center mb-5 w-50 ">
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-5 h-4 ms-1 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </span>
          <p className="text-center  ">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing.
          </p>
        </div>
            </div> 
    </div>
  );
}
