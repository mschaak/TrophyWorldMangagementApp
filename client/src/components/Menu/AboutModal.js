import React, { useState, useEffect } from 'react';
import { StyledAboutModal } from './AboutModal.styled';
import { bool } from 'prop-types';
const AboutModal = ({ openModal, open }) => {
let textInput = React.createRef();
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

  return (



    <StyledAboutModal openModal={openModal} open = {open}>
    <form onSubmit={async () => {
      console.log(email)
      var url = "http://localhost:3000/employees"
      await fetch( url, {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
          "email": email,
          "username": username,
          "password": password,
          "admin": true,
          "master": false
        })
      });
    }}>
        <label>username</label>
        <input className ="form" id="username" name= "username" type="text"  onChange={e => setUsername(e.target.value)}/>
        <br />
        <label>email</label>
        <textarea className="form" id="email" name="email" onChange={f => setEmail(f.target.value)}/>
        <br />
        <label>password</label>
        <textarea className = "form" id="password" name="password" onChange={g => setPassword(g.target.value)}/>

        <button>Add Employee</button>
      </form>
    </StyledAboutModal>
  )
}
AboutModal.propTypes = {
  openModal: bool.isRequired
};
export default AboutModal;
