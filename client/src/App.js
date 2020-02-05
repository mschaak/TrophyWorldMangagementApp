// App.js
import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, AboutModal, RecipeList, EditModal} from './components';
import { useOnClickOutside } from './hooks';
function App() {
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const node = useRef();
  useOnClickOutside(node, () => {
    setOpen(false);
    //setOpenE(false);
  });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <RecipeList openE = {openE} setOpenE = {setOpenE}/>
        <div ref = {node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} openModal = {openModal} setOpenModal = {setOpenModal}/>
          <AboutModal openModal ={openModal} setOpen={setOpenModal} open={open} />

        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
