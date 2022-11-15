import React from 'react'

export default function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: 400,
        height: 160,
        margin: 10
    }
    return (
    <div style={divStyle}>
        <p>{type}</p>
        <p>{number}</p>
        <p>{expirationMonth}</p>
        <p>{expirationYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
    </div>
  )
}
