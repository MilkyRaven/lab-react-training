import React from 'react'

export default function Random(props) {
    const {min, max} = props;
    let random = Math.floor(Math.random() * max) + min;
    console.log(random);
    return (
    <div className='userCard'>
        <p>Random value between {min} and {max} = {random} </p>
    </div>
  )
}
