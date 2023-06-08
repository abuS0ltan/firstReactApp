import React, { Component } from 'react'
import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='footer'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h2 className="footerTitle">LOCATION</h2>
                                <p className="info">2215 John Daniel Drive Clark, MO 65243</p>
                            </div>
                            <div className="col-lg-4">
                                <h2 className="footerTitle">AROUND THE WEB</h2>
                                <div className="links">
                                    <div>
                                        <a href="" className="link"><i className="fa-brands fa-facebook-f" /></a>
                                        <a href="" className="link"><i className="fa-brands fa-twitter" /></a>
                                        <a href="" className="link"><i className="fa-brands fa-linkedin-in" /></a>
                                        <a href="" className="link"><i className="fa-brands fa-dribbble" /></a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h2 className="footerTitle">ABOUT FREELANCER</h2>
                                <p className="info">Freelance is a free to use, MIT licensed Bootstrap theme created by <a className='link'> Start Bootstrap </a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bootomFooter">Copyright &copy; Your Website 2023</div>
                </footer>
            </div>
        )
    }
}
