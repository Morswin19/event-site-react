import React from 'react';
import '../Styles/HomeItem.sass'

const HomeItem = (props) => {
    return (
        <div className={props.class} onClick={() => window.scrollTo(0, 500)}>
            <span>{props.name}</span>
        </div>
    );
}

export default HomeItem;