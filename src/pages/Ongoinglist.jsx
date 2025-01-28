import Ongoing from "./Ongoing"
import img3 from "../assets/images/co11.jpg"
import img5 from "../assets/images/co66.jpg"
import img1 from "../assets/images/co33.jpg"
import Header from "../component/header"
const Ongoinglist =()=>{

    return <>
   <Header/>
<div className="sm:grid sm:grid-cols-3  block sm:ml-0 ml-6 ">
<Ongoing  img={img1}  status="Ongoing"/>
<Ongoing img={img3}  status="Ongoing"/>
<Ongoing img={img5}  status="Ongoing"/>
</div>
    
    </>
} 
export default Ongoinglist