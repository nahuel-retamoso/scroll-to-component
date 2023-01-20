import Navbar from './components/Navbar.js'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Section1 from './components/Section1.js';
import Section2 from './components/Section2.js';
import Section3 from './components/Section3.js';
import Section4 from './components/Section4.js';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [scroll, setScroll] = useState();

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);

  useEffect(() => {
    if (scroll == "one") {
      oneRef.current.scrollIntoView({behavior: 'smooth'});
    }
    if (scroll == "two") {
      twoRef.current.scrollIntoView({behavior: 'smooth'});
    }
    if (scroll == "three") {
      threeRef.current.scrollIntoView({behavior: 'smooth'});
    }
    if (scroll == "four") {
      fourRef.current.scrollIntoView({behavior: 'smooth'});
    }
    
  }, [scroll])
  
  

  return (
      <ChakraProvider>
        <Navbar click={setScroll}/>
        <Section1 ref={oneRef}/>
        <Section2 ref={twoRef}/>
        <Section3 ref={threeRef}/>
        <Section4 ref={fourRef}/>
      </ChakraProvider>    
  );
}

export default App;
