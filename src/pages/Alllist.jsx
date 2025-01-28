import img from "../assets/images/co8.jpg"
import img1 from "../assets/images/co33.jpg"
import img2 from "../assets/images/co22.jpg"
import img3 from "../assets/images/co11.jpg"
import img4 from "../assets/images/co55.jpg"
import img5 from "../assets/images/co66.jpg"

import Header from "../component/header"
import All from "./All"

const Alllist=()=>{

    return <>
    <Header/>
    <div className="sm:grid sm:grid-cols-3  block sm:ml-0 ml-6 gap-1 ">

<All img={img}  status="Compulete"/>
<All img={img1}  status="Ongoing"/>
<All img={img2}  status="Compulete"/>
<All img={img3}  status="Ongoing"/>
<All img={img4}  status="Compulete"/>
<All img={img5}  status="Ongoing"/>
    </div>
    </>
}
export default Alllist