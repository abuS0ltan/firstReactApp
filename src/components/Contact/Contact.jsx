import React, { Component } from 'react'
import './Contact.css';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className='contact'>
                    <div className="container">
                        <h2 className='mainTitle'>CONTACT ME</h2>
                        <div className="starDiv">
                            <div className="line"></div>
                            <i class="fa-solid fa-star"></i>
                            <div className="line"></div>
                        </div>
                        <div className="row form">
                            <div className="col-md-8">
                                <div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone number" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder='Message'/>
                                    </div>
                                    <div className="btnDiv">
                                        <input className='btn' type="submit" value={'Send'}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        )
    }
}
