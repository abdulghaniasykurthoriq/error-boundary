import React from 'react'

const InputName = (props) => {
    return (
        <div>
            <p>Input Name</p>
            <input placeholder="masukan nama" name={props.name} onChange={props.changeName}/>
        </div> 
    )
}

export default InputName
