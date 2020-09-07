import React from 'react';


const header = () => {
    return (
        <div style={headerStyle}>
            <h1>News App</h1>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center'
}

export default header;