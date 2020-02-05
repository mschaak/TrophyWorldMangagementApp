import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import  AboutButton  from '../Button/About'
const Menu = ({ open, SetOpen, openModal, setOpenModal}) => {
  return (
    <StyledMenu open={open}>
      <AboutButton openModal={openModal} setOpenModal={setOpenModal}/>
      <button> LIST2 </button>
      <button> LIST3</button>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
