import styled from 'styled-components';

export const StyledEdit = styled.button`
font-size: 2rem;
text-transform: uppercase;
padding: 2rem 0;
font-weight: bold;
letter-spacing: 0.5rem;
color: ${({ theme }) => theme.primaryLight};
text-decoration: none;
transition: color 0.3s linear;
opacity: ${({ openE }) => openE ? '0.5' : '1'};
border: none;
background: transparent;
&:hover {
  color: ${({ theme }) => theme.primaryHover};
}
&:focus {
  outline: none;
}

`;
