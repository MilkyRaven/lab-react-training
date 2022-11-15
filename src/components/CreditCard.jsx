import React from 'react'
import VisaLogo from '../assets/images/visa.png'

export default function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    let last4Digits = number.slice(-4);
    let maskedNumber = last4Digits.padStart(number.length, "·");
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: 400,
        height: 200,
        margin: 10
    }
    return (
        <div className='creditCard' style={divStyle}>
            <img id='card-logo' src={type === 'Visa'? VisaLogo : VisaLogo} alt="" />
            <h2>{maskedNumber}</h2>
            <div className='details'>
                <p>{expirationMonth}</p>
                <p>{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>
        </div>
    )
}
