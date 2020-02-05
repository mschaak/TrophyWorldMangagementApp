import styled from 'styled-components';

export const StyledAboutModal = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  padding: 2rem;
  position: absolute;
  transform: ${({ openModal,open }) => open&&openModal ? 'translateX(0)' : 'translate(-300%)'};
    top:30%;
    left: 40%;
    margin-top: -50px;
    margin-left: -80px;
    width: 30rem;
    height: 30rem;
  left: 50;
  transition: transform 0.3s ease-in-out;



  button {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    border: none;
    background: transparent;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
    &:focus {
      outline: none;
    }
  }
  h1 {
    color:${({ theme }) => theme.primaryDark};
  }
  label {
    color: ${({ theme }) => theme.primaryDark};
  }
  .form{
    right: 0;
    padding: 10px;
  }
`;
