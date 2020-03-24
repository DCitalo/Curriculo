import React from 'react';
import breakpoints from '../../../styles/breakpoints';
import styled from 'styled-components';
import Container from '../../Atoms/container/container'



let AttItem = props => {
    return (
        <AttContainer className={props.className} tag='ul' flex fw>
            <AttContTitle tag='li' percent='25' flex fw >
                <b className="rob-slab att-title container-100">{props.attr}</b>
                <p className="rob-cond att-sub-title container-100">{props.name}</p>
            </AttContTitle>
            <li className="P-5 DF BorF att-cont-1 text-center">
                <span>-</span>
                <p className="container-100">{props.val}</p>
                <span>+</span>
            </li>
            <li className="P-5 DF BorF att-cont-1 text-center">
                <p className="container-100">{props.base}</p>
            </li>
            <li className="P-5 DF BorF att-cont-2 text-center">
                <p className="container-100">{Number(props.val) + Number(props.base)}</p>
            </li>
        </AttContainer>
    )
}

let AttContainer = styled(Container)`
    margin: 5px 0;
`;

let AttContTitle = styled(Container)`
	background: #000000;
	color:#FFFFFF;
    margin: 0px;
    text-align-last: center;
    border-radius: 5px;
    padding: 5px
`;

export default AttItem;
