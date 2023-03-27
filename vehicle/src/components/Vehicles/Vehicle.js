import react, { useEffect, useState } from "react"
import Data from "../Vehicledetails/Vehicledata";

import "../Vehicles/Vehicle.css";

export default function Vehicles() {

const [vehicle,setVehicle] = useState([])
const[search,setSearch] =  useState("")
const [type,setType] = useState("")



 useEffect(()=>{
   
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json").then(res=>res.json()).then(result=>{
        //console.log(result.data)
        console.log(result.Results)
        setVehicle(result.Results)
       // setVehicle(result.data)
    })

 },[])



const Type = (e)=>{
    setType(e.target.value)
    console.log(e.target.value)
   // vehicle.filter((data)=>data.VehicleType.includes(type))
}
   
    
const Search=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
   // vehicle.filter((res)=>res.Name.includes(search))
}


    return (


        <>
            <div className="container">
                <h1>VEHICLE MANUFACTURERS</h1>
                <nav className="headers">
          <section className="sec-1">
            <label>Search:-</label>
            <input type="text" onChange={(e)=>Search(e)}/>
          </section>
          <section className="sec-2">
            <label>Filter by vahicle types:-</label>
           <select id="select" onChange={(e)=>Type(e)}>
           <option>Passenger Car</option>
           <option>commiricals</option>
           <option>Laxury</option>
         
           </select>
          </section>
                </nav>
                <div className="contains">
                   
                        <ul className="u-1">
                            <li id="l1">MakeId</li>
                            <li id="l2">MakeName</li>
                            <li>VehicleTypeName</li>
                        </ul>
                        {
                            search?vehicle.filter((item)=>item.MakeName.toLowerCase().includes(search)).map((item,i)=>{
                                return(
                                  
                                    <Data item={item} key={i}/>
                                
                                )
                            }):vehicle.filter((item)=>item.VehicleTypeName.toLowerCase().includes(type)).map((item,i)=>{
                                return(
                                  
                                    <Data item={item} key={i}/>
                                
                                )
                            })} 

                 
                </div>
            </div>
        </>
    )
}