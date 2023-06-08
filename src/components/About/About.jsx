import React, { Component } from 'react'
import './About.css';
export default class About extends Component {
    state={
        info1:`
            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        `,
        info2:`
            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
        `
    }
  render() {
    return (
      <div>
        <section className='about'>
            <div className="container">
                <h2 className='mainTitle'>ABOUT</h2>
                <div className="starDiv">
                        <div className="line"></div>
                        <i class="fa-solid fa-star"></i>
                        <div className="line"></div>
                </div>
                <div className="infoDiv">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4">
                            <p className="info">
                                {this.state.info1}
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <p className="info">
                                 {this.state.info2}
                            </p>
                        </div>
                    </div>
                </div>
                <a className='btn'>
                    <i className=" icon fa-solid fa-download" />
                    Free Download!
                </a>
            </div>
        </section>
      </div>
    )
  }
}
