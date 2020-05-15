import React from 'react';

const StaffPerson = (props) => {
    return (
        <div className='personItem'>
            <img src={props.img} alt='staffMember' />
            <h4>{props.user}</h4>
            <p>email: {props.email}</p>
            <p>tel: {props.phone}</p>
        </div>
    );
}

export default StaffPerson;