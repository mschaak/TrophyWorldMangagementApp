import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  top: 0;
  left: 0;
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
`;
