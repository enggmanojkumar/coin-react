import React from 'react';
function Banner(props) {
    return (
        <img className='img-fluid' src={props.src} style={props.style} />
    );
}

export default Banner;