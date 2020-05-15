import React from 'react';
import StaffPerson from '../components/StaffPerson'
import '../Styles/Staff.sass'

class Staff extends React.Component {
    state = {
        facesLinks: [],
        users: []
    }

    componentDidMount() {
        fetch('https://api.generated.photos/api/v1/faces?api_key=B_Qlq8f2NqWgzqnJzVlC_Q')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    facesLinks: data.faces
                })
            });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }

    render() {
        let output = '';
        if (this.state.facesLinks.length && this.state.users.length) {
            output = this.state.facesLinks.map((face, index) => <StaffPerson
                key={face.id}
                img={face.urls[3][256]}
                user={this.state.users[index].name}
                phone={this.state.users[index].phone}
                email={this.state.users[index].email}
            />);
        }
        return (
            <div className='staffPage'>
                {output}
            </div>
        );
    }
}

export default Staff;