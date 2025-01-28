import Compulete from "./compulete"
import img from "../assets/images/co8.jpg"
import img2 from "../assets/images/co22.jpg"
import img4 from "../assets/images/co55.jpg"

import Header from "../component/header"
const Compuletelist=()=>{

return<>
<Header/>
<div className="sm:grid sm:grid-cols-3  block sm:ml-0 ml-6  ">
<Compulete img={img}  status="Compulete"/>
<Compulete img={img2}  status="Compulete"/>
<Compulete img={img4}  status="Compulete"/>
</div>

</>

}
export default Compuletelist