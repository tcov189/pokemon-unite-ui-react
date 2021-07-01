import React from 'react'

function MoveIcon({ moveName, moveIconPath, onClick = null, isActive = false }) {
    const backgroundStyle = {
        backgroundImage: moveIconPath ? `url(${moveIconPath})` : null,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '60px',
        height: '60px',
    }

    if (!moveIconPath) {
        backgroundStyle.backgroundColor = '#6b7280';
    }

    return (
        <div className={`cursor rounded-full ${isActive ? 'border-2 border-yellow-500' : null}`} style={backgroundStyle} onClick={onClick}></div>
    )
}

export default MoveIcon
