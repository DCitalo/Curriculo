import React from 'react';
import breakpoints from '../../../styles/breakpoints';
import styled from 'styled-components';

const full = props => props.full ? 50 : 25;

let ApresentationItem = props => {
    return (
        <li className={props.className}>
            <h4 className="container-100 BorB P-5 desc-cont rob-slab">{props.item}</h4>
            <h5 className="container-100 P-5 desc-title rob-cond">{props.title}</h5>
        </li>
    )
}

ApresentationItem = styled(ApresentationItem)`
    margin: 0 auto;
    position: relative;
    height: auto;
    width: calc(${full}% - 5px);

    & 
    > .desc-cont{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 600;
        > a {
            color: #ff5b5b
        }
    }

    > .desc-title{
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        text-transform: uppercase;
    }

    @media (max-width: ${breakpoints.sm}) {
        max-width: ${breakpoints.sm};
    }

    @media (max-width: ${breakpoints.md}) {
        max-width: ${breakpoints.md};
        width: 100%;
    }

    @media (max-width: ${breakpoints.lg}) {
        max-width:  ${breakpoints.lg};
    }
`;

export default ApresentationItem;
