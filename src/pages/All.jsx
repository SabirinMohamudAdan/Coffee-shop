// import img from "../assets/images/co8.jpg"
import Header from "../component/header"

const All =(props)=>{

    return<>
    <div>
    {/* <Header/> */}
 <div className="  bg-transparent   
  w-[300px] h-[300px] px-8 mt-40 pt-4  rounded-md  ">
    <div className="">
        <img src={props.img} alt=""  className="w-[250px] h-[180px]  rounded-md"/>
  
   
        <p className="mt-4  text-black  border-l-3 border-l-amber-400">Lorem ipsum dolor sit amet <br></br>
         adipisicing elit. Repellendus</p>
         <a href="https://github.com/" className="text-gray-400 mt-3 tex-2xl">
         {props.status}</a>
    </div>
 </div>


    </div>
    
    </>
}
export default All