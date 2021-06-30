import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flex py-2 px-2 mb-2 bg-gray-600 text-gray-200 text-xl">
            <div className="pr-5">
                Nav
            </div>
            <Link to={"/"}>
                Pokemon
            </Link>
        </header>
    )
}

export default Header
