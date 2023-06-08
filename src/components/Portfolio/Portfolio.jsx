import React, { Component } from 'react'
import img1 from './image/cabin.png';
import img2 from './image/cake.png';
import img3 from './image/circus.png';
import img4 from './image/game.png';
import img5 from './image/safe.png';
import img6 from './image/submarine.png';
import './Portfolio.css';
export default class Portfolio extends Component {
    state={

    }
  render() {
    return (
      <div>
        <section className='portfolio'>

        <div className="container">
            <h2 className='mainTitle'>PORTFOLIO</h2>
            <div className="starDiv">
                    <div className="line"></div>
                    <i class="fa-solid fa-star"></i>
                    <div className="line"></div>
            </div>
            <div className="portfolioItem">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="overlay">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <img src={img1} alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="overlay">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <img src={img2} alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="overlay">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <img src={img3} alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="overlay">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <img src={img4} alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="overlay">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <img src={img5} alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="item">
                            <div className="overlay">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <img src={img6} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
