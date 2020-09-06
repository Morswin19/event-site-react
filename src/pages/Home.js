import React from 'react';
import HomeItem from '../components/HomeItem'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <div className='homeItems'>
                    <HomeItem name='XIX PK Festival' class='homeTitle' />
                    <Link to="/archive">
                        <HomeItem name='History' class='homeLink' />
                    </Link>
                    <Link to="/programme">
                        <HomeItem name='Programme' class='homeLink' />
                    </Link>
                    <Link to="about">
                        <HomeItem name='About' class='homeLink' />
                    </Link>
                    <HomeItem name='2020' class='homeTitle' />
                    <Link to="gallery">
                        <HomeItem name='Gallery' class='homeLink' />
                    </Link>
                    <Link to="artists">
                        <HomeItem name='Artists' class='homeLink' />
                    </Link>
                    <Link to="staff">
                        <HomeItem name='Staff' class='homeLink' />
                    </Link>
                </div>
            </>
        )
    }
}

export default Home;