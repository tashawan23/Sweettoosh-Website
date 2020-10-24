import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1 Check out these EPIC Destinations></h1>
            <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="Images/cupcakes.PNG"
                    text="Soft and fluffy Biscoff overload cupcakes"
                    label='Cupcakes'
                    path='/services' />
                    <CardItem
                    src="Images/oozy.jpg"
                    text="Fudgy and oozing chocolate lava"
                    label='Brownies'
                    path='/services' />
                </ul>
                <ul className='cards__items'>
            <CardItem
              src='images/CarrotCake.JPG'
              text='Sugar spice and everything nice'
              label='Cupcakes'
              path='/services'
            />
            <CardItem
              src='images/Smores.PNG'
              text='Enjoy your favourite campfire treat in a brownie'
              label='Brownies'
              path='/products'
            />
            <CardItem
              src='images/layout.JPG'
              text='Simple yet irresistable blackout brownies'
              label='Brownies'
              path='/sign-up'
            />
          </ul>
            </div>
            </div>
        </div>
    );
}

export default Cards;
