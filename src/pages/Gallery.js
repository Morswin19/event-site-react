import React from 'react';
import GalleryItem from '../components/GalleryItem'
import '../Styles/GalleryItem.sass'

class Home extends React.Component {
    state = {

    }
    render() {
        return (
            <>
                <div className='galleryItems'>
                    <h1>PK Festival Gallery</h1>
                    <GalleryItem name='2019' src='https://cdn.pixabay.com/photo/2019/01/28/18/53/harp-3961060_960_720.jpg' />
                    <GalleryItem name='2018' src='https://cdn.pixabay.com/photo/2015/10/12/15/09/concert-984237_960_720.jpg' />
                    <GalleryItem name='2017' src='https://cdn.pixabay.com/photo/2017/09/28/19/40/the-mission-uk-2796670_960_720.jpg' />
                    <GalleryItem name='2016' src='https://cdn.pixabay.com/photo/2015/10/31/12/54/guitar-1015750_960_720.jpg' />
                    <GalleryItem name='2015' src='https://cdn.pixabay.com/photo/2017/08/01/14/51/concert-2566002_960_720.jpg' />
                    <GalleryItem name='2014' src='https://cdn.pixabay.com/photo/2015/10/12/15/09/concert-984237_960_720.jpg' />
                    <GalleryItem name='2013' src='https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_960_720.jpg' />
                    <GalleryItem name='2020' src='https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_960_720.jpg' />
                </div>
            </>
        )
    }
}

export default Home;