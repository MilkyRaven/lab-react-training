import React from 'react'

export default function IdCard(props) {
    console.log(props)
    const {lastName, firstName, gender, height, birth, picture} = props
    console.log(birth)
  return (
    <div className='userCard'>
        <div className="user-text">
            <p className="lastName"><strong>Last name:</strong> {lastName}</p>
            <p className="firstName"> <strong>First name:</strong> {firstName}</p>
            <p className="gender"> <strong>Gender:</strong> {gender}</p>
            <p className="height"> <strong>Height:</strong> {height}</p>
            <p className="birth"> <strong>Birth:</strong> {String(birth)}</p>
        </div>
        <img src={picture} alt="" className="picture" width="205px"></img>
    </div>
  )
}
