import { Link } from "react-router-dom";

function All_coutry_data({ data }) {
    let countryDiv = data.map(item => {
        let countryName = item.name.common
        let countryFlag = item.flags.svg
        let population = (item.population).toLocaleString()
        let Region = item.region
        let capital = item.capital  
        let countryCode = item.cca3
        return (
            <>
                <Link to={`/CountryDetails/${countryCode}`}>
                    <div className="bg-white shadow-xl mb-10 w-5/5 h-80 ">
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
        <>
            {
                countryDiv
            }

        </>
    )
}


export { All_coutry_data }