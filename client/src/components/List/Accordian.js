// Burger.js
import React, {useState, useRef} from 'react';
import { StyledAccordian } from './Accordian.styled';
import EditButton from '../Button/EditButton'

const Accordian = ({ Id, Email, Username ,Password, Phonenumber, Admin, Master,openE, setOpenE}) => {
  let textInput = React.createRef();
   const [setActive, setActiveState] = useState(false);
   const [setHeight, setHeightState] = useState("0px");
   const [password, setPassword] = useState("");
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const content = useRef(null);
   function toggleAccordion() {
     setEmail(Email)
     setPassword(Password)
     setUserName(Username)
    setActiveState(!setActive);
    console.log("click");
  }
  return (
    <div className="accordion__section">
     <h1 onClick ={toggleAccordion}> {Username} </h1>
     {setActive ? <div ref = {content} className="accordion__content">
       <div
         className="accordion__text">
          id: {Id}
          <br />
          email: {Email}
          <br />
          Admin?: {Admin ? "yes" : "no"}
         </div>
         <br />


         <form onSubmit={async () => {
            var url = "http://localhost:3000/employees/" + Id
           await fetch( url, {
             method: 'PATCH',
             headers: {"Content-Type": 'application/json'},
             body: JSON.stringify({
               "email": email,
               "username": userName,
               "password": password,
               "admin": true,
               "master": false
             })
           });
    }}>
        <label>Email: </label>
        <input className ="form" id="name" name= "name" type="text" placeholder = {Email} onChange={e => setEmail(e.target.value)}/>
        <br />
        <label>Password: </label>
        <textarea className="form" id="ingredients" name="ingredients" placeholder = {Password} onChange={f => setPassword(f.target.value)}/>
        <br />
        <label>UserName: </label>
        <textarea className = "form" id="directions" name="direcitons" placeholder = {Username} onChange={g => setUserName(g.target.value)}/>
        <hr />
        <button>Edit Employee</button>
      </form>


      <button id = {Id} onClick = {e => {
        var url = "http://localhost:3000/employees/" + e.target.id
        fetch( url, {
          method: 'DELETE',
        })
      }}> Delete </button>
     </div> : null}
   </div>

  )
}
export default Accordian;
