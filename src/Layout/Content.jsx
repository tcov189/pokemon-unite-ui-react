import React from 'react'

function Content({ children }) {
    return (
        <div className="px-2 flex-1">
            { children }
        </div>
    )
}

export default Content
