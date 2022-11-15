import React from 'react'

export default function Greetings(props) {
    //console.log(props)
    const {lang, children} = props;
    let saludo;
    if (lang === "fr"){
        saludo = "Bonjour";
    } else if (lang === "de"){
        saludo = "Halo";
    } else if (lang === "es") {
        saludo = "Hola";
    } else if (lang === "en"){
        saludo = "Hello";
    }
  return (
    <div className='userCard'>
        <p className='lang'>{saludo} {children}</p>
    </div>
  )
}
