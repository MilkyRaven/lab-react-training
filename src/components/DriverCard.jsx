import React from 'react'
import Rating from './Rating';

export default function DriverCard(props) {
    console.log(props)
    const {name, rating, img, car} = props;
    console.log(img)
  return (
    <div className='driverCard'>
        <div className='driverText'>
            <h2>{name}</h2>
            <h3><Rating>{rating}</Rating></h3>
            <div className='carLicense'>
                <h4>{car.model}</h4>
                <p> - </p>
                <h4>{car.licensePlate}</h4>
            </div>
        </div>
        <img src={img} alt="" />
    </div>
  )
}
