import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>About</h3>
                    <p>About</p>
                    <p>About</p>
                    <p>About</p>
                    <p>About</p>
                </div>
                <div className='col'>
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Company</p>
                    <p>Company</p>
                    <p>Company</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Legal</p>
                    <p>Legal</p>
                    <p>Legal</p>
                    <p>Legal</p>
                </div>
                <div className='col'>
                    <h3>Informations</h3>
                    <p>Informations</p>
                    <p>Informations</p>
                    <p>Informations</p>
                    <p>Informations</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
