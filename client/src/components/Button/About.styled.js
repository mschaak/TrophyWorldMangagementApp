import styled from 'styled-components';

export const StyledAbout = styled.button`
font-size: 2rem;
text-transform: uppercase;
padding: 2rem 0;
font-weight: bold;
letter-spacing: 0.5rem;
color: ${({ theme }) => theme.primaryDark};
text-decoration: none;
transition: color 0.3s linear;
opacity: ${({ openModal }) => openModal ? '0.5' : '1'};
border: none;
background: transparent;
&:hover {
  color: ${({ theme }) => theme.primaryHover};
}
&:focus {
  outline: none;
}

`;
