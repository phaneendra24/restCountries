import React from "react";

function Searchbar() {
    return (
        <div className="pr-10 pl-10 sm:pr-14 sm:pl-14 mt-10 flex justify-between">
            <i className="fas fa-search icon absolute   pt-3 pl-2"></i>
            <input className="w-4/6 h-10 pl-10 pr-5 sm:w-2/6 bg-white shadow-xl outline-none" placeholder="Search for a country" />
            <select name="filters " className="w-36 h-10 shadow-xl">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">Amercia</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="America">Oceania</option>
            </select>
        </div>
    )

}


export { Searchbar }