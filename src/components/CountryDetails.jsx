import { useParams } from "react-router-dom";
function CountryDetails() {
    let countryData = []
    const { countryCode } = useParams()
    callApi()
    async function callApi() {
        let response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        let data1 = await response.json()
        countryData = await data1
        console.log(countryData);
        let countryDataDiv = countryData.map(item => {
            let countryName = item.name.common
            let countryFlag = item.flags.svg
            let population = (item.population).toLocaleString()
            let Region = item.region
            let capital = item.capital
            return (
                <>
                    <div className="bg-white shadow-xl mb-10 w-5/5 animate-pulse">
                        <img src={countryFlag} alt="" className="w-full" />

                        <div className="pl-5 pr-5 pb-8">
                            <h1 className="font-bold">{countryName}</h1>
                            <h3 className="font-semibold">population : <span className="font-light text-base">{population}</span></h3>
                            <h3 className="font-semibold">Region : <span className="font-light text-base" >{Region}</span></h3>
                            <h3 className="font-semibold">Capital : <span className="font-light text-base">{capital}</span></h3>
                        </div>
                    </div>
                </>
            )
        })
        return countryDataDiv
    }
    return (
        <>
            <h1>hello world! {countryCode}</h1>
            {
                callApi
            }
        </>
    )
}

export { CountryDetails }