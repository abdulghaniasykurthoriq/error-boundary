import React from 'react'
import BuggyCounter from './componenet/BuggyCounter'
import ConditionalComponent from './componenet/ConditionalComponent'
import ErrorBoundary from './componenet/ErrorBoundary'
function App(){
  return(
    <div className="App">
      <p>this is text</p>
      <ErrorBoundary themecolor='green'>
        <BuggyCounter />
        {/* <ConditionalComponent  color="red" />
        <ConditionalComponent  color="blue" /> */}
        <ConditionalComponent/>
      </ErrorBoundary>
      <ErrorBoundary themecolor='yellow'>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary themecolor='blue'>
      <BuggyCounter />
      </ErrorBoundary>
    </div>
  )
}

export default App;


















// import React, { Component  } from 'react';
// import './App.css';



// class App extends Component {
//     state = {
//         name : '',
//         addres : '',
//         nomor: ''
//     };

//   changeName = (event) => {
//     const noname = /^[A-Za-z]+$/;
//     if(event.target.value.match(noname)){
//       this.setState({
//         name: event.target.value
//       })

//     }
  
//   }
//   changeAddres = (event) => {
//     const noaddres = /^[A-Za-z]+$/;
//     if(event.target.value.match(noaddres)){
//       this.setState({
//         addres: event.target.value
//       })

//     }

//   }
//   changeNomor = (event) => {
//     const novalid = /^[0-9\b]+$/;
//     if(event.target.value.match(novalid)){
//       this.setState({
//         nomor: event.target.value
//       })
//     }
 
//   }
//   checkSubmit = (e) => {
//     e.preventDefault();
//     console.log('link sedang di klik')
//         if(this.state.name.length < 5 ){
//           alert('Nama Tidak boleh kosong dan minimal charakter 5 huruf')
//         }else if(this.state.addres.length < 5){
//           alert('addres tidak boleh kosong dan minimal character 5 huruf')}
//           else if(this.state.nomor.length < 8 || this.state.nomor.length > 12 ){
//             alert('nomor harus di isi antara 8-12B')}
//           else{
//             alert(`sip udah bener ${this.state.name}`)
//           }
//         }
        
//   render(){

//     // buat variabel biar nggak kepanjangan
    
//     const dizabled = this.state.name.length<5 || this.state.addres.length<5 || 
//             this.state.nomor.length < 8 || this.state.nomor.length > 12 ? true:false


//     return (
//       <div className="App">
//         <div className="form-wrapper">
//           <h1>Hallo world</h1>
//           <p>Masukan Nama</p>
//           <input onChange={this.changeName}/>
//           <p>Masukan Addres</p>
//           <input onChange={this.changeAddres}/>
//           <p>Masukan Nomor</p>
//           <input onChange={this.changeNomor}/><br/>

//           <button disabled={dizabled} 
//             onClick={this.checkSubmit}>Confirm
//           </button>

//           {/* disabled={this.state.name.length<5 || this.state.addres.length<5 || 
//             this.state.nomor.length < 8 || this.state.nomor.length > 12 */}
          
//         </div>  
//       </div> 
//     );
//   }
// }

// export default App;






// start card session


// import React, { useState } from 'react';
// import './App.css';
// import Card from './Card';

// function App(){
//   const [showCard, setShowCard] = useState(true)
//   const [cards, setCards] = useState([
//     {
//         id: 'sdsds',
//         name : 'Dony Al-Uzzam',
//         age: '12',
//         title: 'this Title',
//         avatar: 'data:image/jpeg;base64,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'
//     },
//     {
//       id: 'sdsdss',
//       name : 'Agat',
//       age: '12',
//       title: 'this Title',
//       avatar: 'data:image/jpeg;base64,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'
//   },
//   {
//       id: 'sdass',
//       name : 'Angga',
//       age: '12',
//       title: 'this Title',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFpXFisL1g-Vt6gjkPvvxvmXZsIzKn1nLFSg&usqp=CAU'
//   },
//   {
//       id: 'ssdsdss',
//       name : 'Falah',
//       age: '12',
//       title: 'this Title',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG12LrSKn2MDxOQG-xMInKV13Y6Ys6Y5ZdXA&usqp=CAU'
//   },
//   {
//       id: 'edsdss',
//       name : 'Hanif',
//       age: '12',
//       title: 'this Title',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1tH8nBFao7p8_3Pnu-7dKenC11VWzINseTA&usqp=CAU'
//   },
//   {
//       id: 'sdudss',
//       name : 'Adhi',
//       age: '12',
//       title: 'this Title',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6n_fDXLi0ZXu3JPwGpArMB1HE9mbee88dyQ&usqp=CAU'
//   },
//   {
//       id: 'kkll',
//       name : 'Dewi',
//       age: '12',
//       title: 'this Title',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZoB2A3Wrb8h2WL3xQSg4aed71NW03f5Kdbw&usqp=CAU'
//   }
// ])

//   const toggleButton = () => {
//     setShowCard(!showCard)
//   }

//   const deleteCardHandler = (card, id) => {
//     const cards_copy = [...cards]
//     cards_copy.splice(id, 1)
//     setCards(cards_copy)

//   }

//   const changeNameHandler = (event, id) => {
//     const cardIndex = cards.findIndex(card =>card.id === id)
//     const cards_copy = [...cards]
//     cards_copy[cardIndex].name = event.target.value 
//     setCards(cards_copy)
//   }
//   const changeAgeHandlerz = (event, id) =>{
//     const cardIndex = cards.findIndex(card =>card.id === id)
//     const cards_copy = [...cards]
//     cards_copy[cardIndex].age = event.target.value 
//     setCards(cards_copy)
//   }


//   const changeTitleHandlerz = (event, id) =>{
//     const cardIndex = cards.findIndex(card =>card.id === id)
//     const cards_copy = [...cards]
//     cards_copy[cardIndex].title = event.target.value 
//     setCards(cards_copy)
//   }

//   const buttonMarkup =(
//     <div>
//         <button className="button button1">YES</button>
//         <button className="button button1">No</button>
//     </div>
//   )


//   // const buttonStyle = {
//   //   backgroundColor: null
//   // }
//   const clases = ['button']
//   if(cards.length > 5) clases.push('blue')
//   if(cards.leghth < 5) clases.push('green')
//   // if(card.length > 5) buttonStyle.backgroundColor= 'blue'
//   // if(card.leghth < 5) buttonStyle.backgroundColor= 'lightpink'

//   const cardMarkup = showCard && (
//     cards.map((card, index) => <Card
//     name={card.name}
//     title={card.title}
//     avatar={card.avatar}
//     age={card.age}
//     key={card.id}
//     changeTitle={(event) => changeTitleHandlerz(event, card.id)}
//     onDelete={ () => deleteCardHandler(index) }
//     changeName={(event) => changeNameHandler(event, card.id)}
//     changeAge={(event)=> changeAgeHandlerz(event, card.id)}

//     > {buttonMarkup} </Card>)
//   )
//   return (
//     <div className="App">
//       <button onClick={toggleButton} className={clases.join(' ')}>Show/Hide</button>
//       {/* {showCard ? <Card/> : null} */}

//       {/* {buttonMarkup} */}
//       {cardMarkup}
//     </div>
//    )
// }


// export default App

// end card session

























// import React, { Component  } from 'react';
// import './App.css';

// import InputName from './InputName'
// import Button from './Button';
// import User from './User';
// import Age from './Age';


// class App extends Component {

//   state = {
//         name : '',
//         age : '' 
//     };

//   changePersonHandler = (event) => {
//     this.setState({

//       name: event.target.value

//     })
//   }
  
//   changePersonHandlerz = (event) => {
//     this.setState({

//       age: event.target.value
      

//     })
//   }

  
//   checkSubmit = () => {
//     if(this.state.age === '' || this.state.name === ''){
//       alert('input harus di isi')
//     }

//     else if(this.state.name === '' ){
//       alert('input name belum di isi')
//     }

//     else if(isNaN(this.state.age)) {
//       alert('age harus number')
//       return false;
//     }

//     else if(this.state.age === '' ){
//       alert('input age belum di isi')
//     }
    

//     else{
//       alert('sudah di isi')
//     }
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1>Hallo Selamat Datang</h1>
//         <InputName name={this.state.name} changeName={this.changePersonHandler} />
//         <Age age={this.state.age} changeAge={this.changePersonHandlerz} />
//         <User name={this.state.name} age={this.state.age}/>

//         <Button clickButton={this.checkSubmit} />
//       </div> 
//     );
//   }
// }

// export default App;
