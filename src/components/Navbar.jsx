import React from "react"


function Navbar() {
    let themeSwitch = () => {

    }
    return (
        <div className="bg-white shadow-md h-16 w-screen flex justify-between  items-center pl-10 pr-10 sm:pl-14 sm:pr-14r   ">
            <h1 className="font-bold text-xl ">Where in the world?</h1>

            <button className="" onClick={themeSwitch}> <i className="fa-solid fa-moon"></i>   Dark Mode</button>
        </div>
    )
}


export { Navbar }