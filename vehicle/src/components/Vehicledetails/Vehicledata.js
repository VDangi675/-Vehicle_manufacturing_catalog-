import react, { useCallback, useState } from "react"

import "../Vehicledetails/Vehicledata.css";

export default function Data({ item }) {

    const [popup, setPopup] = useState(false)

const Toggle =()=>{
   setPopup(true)
}


    return (
        <>
<div className="box">
            <ul className="ul">
                <li id="l-1">{item.MakeId}</li>
                <li  id="l-2" onClick={(e)=>Toggle(e)}>{item.MakeName }</li>
                <li id="l-3">{item.VehicleTypeName}</li>

                {/* <li id="l-1">{item.email}</li>
                <li id="l-2">{item.first_name}</li>
                <li id="l-3">{item.last_name}</li> */}

            </ul>
            </div>

            {
                popup? <div className="msg">
                <h1>{item.MakeName}</h1>
                <h1>{item.VehicleTypeName}</h1>
            </div>:null
            }
           




        </>
    )
}