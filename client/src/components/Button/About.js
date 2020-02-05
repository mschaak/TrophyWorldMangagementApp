import React from 'react';
import { bool, func } from 'prop-types';
import { StyledAbout } from './About.styled';
const AboutButton = ({ openModal, setOpenModal }) => {
  return (
    <StyledAbout openModal={openModal} onClick={() => setOpenModal(!openModal)}>
      ADD
    </StyledAbout>
  );
}
AboutButton.propTypes = {
  openModal: bool.isRequired,
  setOpenModal: func.isRequired,
};
export default AboutButton;
