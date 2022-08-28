import { useState } from "react"
import { Link } from "react-router-dom"

function CountriesGrid() {
    let [data, setdata] = useState([])

    async function callApi() {
        let response = await fetch("https://restcountries.com/v3.1/all")
        let data1 = await response.json()
        setdata(data1)
    }
    // let navigate = useNavigate()
    callApi()
    let CountryDiv = data.map(item => {
        let countryName = item.name.common
        let countryFlag = item.flags.svg
        let population = (item.population).toLocaleString()
        let Region = item.region
        let capital = item.capital
        let countryCode = item.cca3
        return (
            <>
                <Link to={`/countryDetails/${countryCode}`}>
                    <div className="bg-white shadow-xl mb-10 w-5/5">
                        <img src={countryFlag} alt="" className="w-full" />

                        <div className="pl-5 pr-5 pb-8">
                            <h1 className="font-bold">{countryName}</h1>
                            <h3 className="font-semibold">population : <span className="font-light text-base">{population}</span></h3>
                            <h3 className="font-semibold">Region : <span className="font-light text-base" >{Region}</span></h3>
                            <h3 className="font-semibold">Capital : <span className="font-light text-base">{capital}</span></h3>
                        </div>
                    </div>
                </Link>
            </>
        )
    })

    return (
        <div className="ml-14 mr-14 mt-10 grid grid-cols-4 gap-14 justify-center">

            {
                CountryDiv
            }


        </div>
    )
}

export { CountriesGrid, }