import { useParams } from "react-router-dom";
import { useState } from "react";
import { EachCountry } from './EachCountry'
import { useEffect } from "react";



function CountryDetails() {


    
async function fetch_data(countryCode) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}/`)
    const data = await response.json()
    return data
}


    
    let [country,setcountry]= useState([])

    const countryCode = useParams().countryCode
    useEffect(()=>{
    fetch_data(countryCode)
        .then(res=>{
            setcountry(res)
        })    
    },[countryCode])
    console.log();
    console.log(country);

    return (
        <div className=" w-full h-screen bg-orange-500 flex justify-center items-center" >
            <EachCountry data={country}  />

        </div>
    )
}

export { CountryDetails }

