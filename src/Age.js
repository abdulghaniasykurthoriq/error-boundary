import React from 'react'

const Age = (props) => {
    return (
        <div>
            <p>Input Age</p>
            <input placeholder="Masukan Umur" age={props.age} onChange={props.changeAge}/>
        </div> 
    )
}

export default Age
