import React from 'react'
import '../Styles/Social.sass'

const Social = () => {
    return (
        <div className="socialComponent">
            <button>
                <i href="#" className="fa fa-facebook"></i>
            </button>
            <button>
                <i href="#" className="fa fa-twitter"></i>
            </button>
            <button>
                <i href="#" className="fa fa-instagram"></i>
            </button>
        </div>
    );
}

export default Social;