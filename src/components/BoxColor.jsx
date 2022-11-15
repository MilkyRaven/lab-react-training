import React from 'react'

export default function BoxColor(props) {
    const {r, b, g} = props;
    //console.log(r, b, g)
    const divStyle = {
        backgroundColor: `rgb(${r}, ${b}, ${g})`,
        width: 500,
        height: 100,
        color: "White",
        margin: 10
    }
    return (
    <div>
        <div className='boxColor' style={divStyle}>
            <p>rgb ({r}, {b}, {g})</p>
        </div>
    </div>
  )
}
