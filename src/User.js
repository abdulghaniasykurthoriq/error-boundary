import React from 'react'

const User = (props) => {
    return (
        <div>
            <span>Hallo nama saya: {props.name} <br/>
            umur saya :{props.age}</span>
        </div>
    )
}

export default User
 

// 1. cek 2 inputuan harus
// 2. input age harus number