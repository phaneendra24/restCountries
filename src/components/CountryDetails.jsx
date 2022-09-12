import { useParams } from "react-router-dom";
import { setLogger, useQuery } from "react-query"
import { useState } from "react";
import { useEffect } from "react";

async function fetch_data(countryCode) {
    console.log(countryCode);
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    return res.json()
}


function CountryDetails() {
    const { countryCode } = useParams()
    const { data, status } = useQuery('call_stuff', () => { return fetch_data(countryCode) })

    console.log(data);
    country_data(data)
    function country_data(data) {

        data.map(item => {

            let countryName = item.name.common
            let countryFlag = item.flags.svg
            let population = (item.population).toLocaleString()
            let Region = item.region
            let capital = item.capital
            let Nativename = item.altSpellings[1]
            let subRegion = item.subregion
            let toplevelDomain = item.tld
            let currencies = item.currencies
            let langugaes = item.languages

            return (
                <>
                    <img src={countryFlag} className="w-1/4" />

                </>
            )

        })
    }





    return (
        <div className=" w-full h-1/3  bg-orange-500" >
            {
                //  country_data
            }


        </div>
    )
}

export { CountryDetails }

