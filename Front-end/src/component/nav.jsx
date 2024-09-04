import React, { useState ,} from 'react'
import logo from "../asset/logo.png"
import { FaHome } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink, useNavigate } from 'react-router-dom';





export default function Nav() {

  const navigation = useNavigate()
  return (
    <div>
      <nav className='flex justify-between   w-[100%] pr-4 bg-red-100'>
        <img src={logo} alt="logo image" className='h-[4rem] w-[3rem] ml-10 ' />
        <ul className='flex space-x-6 pt-5'>
           <Link to="/" ><li className='hover:font-bold  hover:bg-white  duration-500 hover:scale-105 hover:p-1 hover: rounded-lg ' >Home</li></Link>
           <Link to="/ordernow" ><li className='hover:font-bold hover:bg-white  duration-500 hover:p-1 hover: rounded-lg' >Order</li></Link>
           <Link to="/about" ><li className='hover:font-bold hover:bg-white hover:p-1 duration-500 hover: rounded-lg '>About</li></Link>
           <li><button className='bg-red-800  text-white px-2 py-0  pb-1 text-sm rounded-lg duration-1000 hover:px-4 hover:bg-red-500 hover:font-bold' onClick={()=> {navigation("/signup")}} >Sign up</button></li>
        </ul>
      </nav>
    </div>
  )

}
export function Sidebar({children}) {
  const[isOpen,setIsOpen]=useState(false);
  const show =()=>setIsOpen(!isOpen)
  const menuItems=[
    {
      path:"/",
      name:"Home",
      icon: <FaHome/>
    },
    {
      path:"/ordernow",
      name:"Ordernow",
      icon: <MdShoppingCart/>
    }, {
      path:"/about",
      name:"About",
      icon: <FaQuestion/>
    }
  ]

    return (
      <>
      <div className='container flex fixed mt-[4rem]'>
        <div style = {{width:isOpen?"15rem":"3rem"}}className='sidebar bg-red-600 text-black h-screen w-[14.5rem]'> 
          <div className='topsection flex align-center pt-[1rem] pr-[1.5rem]'>
            <div style = {{marginLeft:isOpen?"12rem":"0.8rem"}}className='bar flex text-[1.5rem] ml-[2rem] '>
            <TiThMenu onClick={show}/>
          </div>
          </div>
          {menuItems.map((items,index)=>(
         <NavLink to={items.path} key={index} className='flex pt-[1rem] pr-[1rem] space-x-4 hover:bg-white  hover:text-black'>
          <div className='text-[1.3rem] ml-[0.8rem]'>{items.icon}</div>
          <div  style = {{display:isOpen?'block':"none"}} className=''>{items.name}</div>
         </NavLink>
          ))}
          </div>
         <main className='w-[100%] p-[20px]'>{children}</main>
        
      </div>
      </>
    )
  }


