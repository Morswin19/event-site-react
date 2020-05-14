import React from 'react';
import '../Styles/Programme.sass'

const Programme = () => {
    return (
        <div className='programmePage'>
            <div className='programmeDay'>
                <h1>Programme of 2020 PK festival</h1>
                <hr />
                <h2>19 November</h2>
                <hr style={{ border: '1px solid #158a90' }} />
                <div className="concert">
                    <span>11:00 - 12:30</span>
                    <h4>Locanda della Museo Rosenbach</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="concert">
                    <span>13:00 - 14:30</span>
                    <h4>Secunda Forneria Marconi</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque </p>
                </div>
                <div className="concert">
                    <span>15:00 - 16:30</span>
                    <h4>La Orma</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut id</p>
                </div>
                <div className="concert">
                    <span>17:00 - 18:30</span>
                    <h4>Banco Del Mutuho</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut id molestiae</p>
                </div>
                <div className="concert">
                    <span>19:00 - 20:30</span>
                    <h4>Per Un Soccorso</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut id molestiae vero ad</p>
                </div>
                <div className="concert">
                    <span>21:00 - 23:00</span>
                    <h4>Uomo di Palepoli</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut id molestiae vero ad voluptas</p>
                </div>
            </div>
            <div className='programmeDay'>
                <h2 style={{ paddingTop: '40px' }}>20 November</h2>
                <hr style={{ border: '1px solid #158a90' }} />
                <div className="concert">
                    <span>11:00 - 12:30</span>
                    <h4>Locanda della Museo Rosenbach</h4>
                    <p>Atque ut id molestiae vero ad voluptas facilis architecto eos.</p>
                </div>
                <div className="concert">
                    <span>13:00 - 14:00</span>
                    <h4>Secunda Forneria Marconi</h4>
                    <p>Lorem ipsum dolor sit amet, eos. </p>
                </div>
                <div className="concert">
                    <span>14:15 - 15:15</span>
                    <h4>Secunda Forneria Marconi</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut id molestiae</p>
                </div>
                <div className="concert">
                    <span>15:30 - 16:30</span>
                    <h4>La Orma</h4>
                    <p>Atque ut id molestiae vero ad voluptas facilis architecto eos. </p>
                </div>
                <div className="concert">
                    <span>17:00 - 18:30</span>
                    <h4>Banco Del Mutuho</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="concert">
                    <span>19:00 - 20:30</span>
                    <h4>Per Un Soccorso</h4>
                    <p>Lorem ipsum dolor sit amet, voluptas facilis architecto eos. </p>
                </div>
                <div className="concert"><span>21:00 - 23:00</span>
                    <h4>Uomo di Palepoli</h4>
                    <p>Atque ut id molestiae vero ad voluptas facilis architecto eos. </p>
                </div>
            </div>
        </div >
    );
}

export default Programme;