import React from 'react';
import AttItem from '../../Atoms/AttItem/att_item';
import Container from '../../Atoms/container/container';

let Stats = props => {
    return (
        <Container percent='20' flex fw marginZero tbHide className="tb-hide">
            <AttItem
                attr="FOR"
                name="Força"
                val="00"
                base="10" />
            <AttItem
                attr="DES"
                name="Destreza"
                val="00"
                base="10" />
            <AttItem
                attr="CON"
                name="Constituição"
                val="00"
                base="10" />
            <AttItem
                attr="INT"
                name="Inteligência"
                val="00"
                base="10" />
            <AttItem
                attr="SAB"
                name="Sabedoria"
                val="00"
                base="10" />
            <AttItem
                attr="CAR"
                name="Carisma"
                val="00"
                base="10" />
        </Container>
    )
}


export default Stats;
