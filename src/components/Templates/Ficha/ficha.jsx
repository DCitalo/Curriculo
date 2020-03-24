import React from 'react';
import Header from '../../organisms/Header/header';
import Section from '../../organisms/Section/section'
import styled from 'styled-components';



let Ficha = (props) => {
    return (
        <div className={props.className}>
            <Header />
            <Section />
        </div >
    );
}

Ficha = styled(Ficha)`
	padding: 15px;
	background:#fff;
    margin:0 auto;
    border-radius: 5px;
`;

export default Ficha;
