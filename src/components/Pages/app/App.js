import React from 'react';
import './App.css';
import Ficha from '../../Templates/Ficha/ficha';
import styled from 'styled-components';


let App = (props) => {
  return (
    <div className={props.className}>
      <Ficha />
    </div>
  );
}

App = styled(App)`
	padding: 20px;
	background:url('/images/Bg-Perfil.png');
	margin:0 auto;
	background-size: 100%;
	background-attachment: fixed;
`;


export default App;
