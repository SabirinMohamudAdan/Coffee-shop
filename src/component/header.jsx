import { NavLink } from "react-router-dom"

const Header=()=>{

  
return <>
<div className="bg-[#59B8C3] w-[100%] h-[100px] pt-10  inset-0 fixed    sm:ml-0 ml-0  ">
    <ul className=" flex  gap-14 justify-center   text-white text-xl ">
     <NavLink to="/">  <li >All</li></NavLink> 
       <NavLink to="/comp"> <li>Compulete</li></NavLink> 
       <NavLink to="/ongoing"> <li>Ongoing</li></NavLink>
    </ul>
</div>

</>



}
export default Header