import React from 'react';
import { bool, func } from 'prop-types';
import { StyledEdit } from './EditButton.styled';
const EditButton = ({ openE, setOpenE }) => {
  return (
    <StyledEdit openE={openE} onClick={() => setOpenE(!openE)}>
      Edit
    </StyledEdit>
  );
}
EditButton.propTypes = {
  openModal: bool.isRequired,
  setOpenModal: func.isRequired,
};
export default EditButton;
