import React from 'react';

const GalleryItem = (props) => {
    return (
        <div className='galleryItem'>
            <div className='imgContainer'>
                <img src={props.src} alt="" />
            </div>
            <h3>{props.name}</h3>
        </div>
    );
}

export default GalleryItem;