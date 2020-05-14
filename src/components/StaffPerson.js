import React from 'react';

const StaffPerson = (props) => {
    return (
        <div className='personItem'>
            <img src={props.img} />
            <h4>{props.user}</h4>
            <p>email: {props.email}</p>
            <p>tel: {props.phone}</p>
        </div>
    );
}

export default StaffPerson;

// this.state.users.length) {
//     output = this.state.facesLinks.map((face, index) => <StaffPerson key={face.id} img={face.urls[3][256]} user={this.state.users[index].name} />);
//     console.log(output)
// }