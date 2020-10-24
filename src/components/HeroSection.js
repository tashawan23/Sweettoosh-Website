import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1> FOR YOUR SWEET TOOTH </h1>
            <p>You deserve a sweet treat</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'> Browse Menu </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'> 
                BEHIND THE SCENES <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
