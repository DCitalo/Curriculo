import React from 'react';
import Me from '../../molecule/Me/me';
import styled from 'styled-components';
import Apresentation from '../../molecule/Apresentation/apresentation';

let Header = props => {
    return (
        <header className={props.className}>
            <Me />
            <Apresentation />
        </header>
    )
}

Header = styled(Header)`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;



export default Header;
