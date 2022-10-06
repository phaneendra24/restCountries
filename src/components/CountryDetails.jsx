// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { EachCountry } from './EachCountry'

// async function fetch_data(countryCode) {
//     console.log(countryCode);
//     const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
//     return res.json()
// }


// function CountryDetails() {
//     const [data, setdata] = useState([])
//     const { countryCode } = useParams()
//     async function fetching(countryCode) {
//         const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
//         const stuff = await res.json()
//         console.log(stuff);
//         setdata(stuff)
//     }
//     console.log(data);
//     fetching(countryCode)
//     return (
//         <div className=" w-full h-1/3  bg-orange-500" >
//             <EachCountry data={data.name} flag={data.flag} />

//         </div>
//     )
// }

// export { CountryDetails }

