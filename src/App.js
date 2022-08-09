import {useEffect} from 'react';
import styled from 'styled-components'

export default function App() {
  useEffect(() => {
    document.body.classList.add('bg-color');
    document.body.style.backgroundColor = '#0E1129';
  }, []);

  return (
    <Wrapper>
      <box className="box">Test</box>
    </Wrapper>
  );
};

/*const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`*/

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;
  }
`