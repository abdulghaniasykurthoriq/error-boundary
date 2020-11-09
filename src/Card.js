import React from 'react'
import './App.css';

const Card = (props) => {
    return (
    <div className="card">
        <img src={props.avatar} alt="Avatar" style={{width:'100%'}} />
        <div className="container">
            <input type="text" onChange={props.changeName} placeholder="nama" />
            <input placeholder="umur" onChange={props.changeAge}/>
            <input placeholder="mengubah title" onChange={props.changeTitle}/>
            
            <h4><b>{props.name}</b></h4> 
            <p>{props.title}</p> 
            <p>{props.age}</p>
            
            <button className="button button1" onClick={props.onDelete}>Delete</button>

            {/* {props.children} */}
        </div>
    </div>
    )
}

export default Card
