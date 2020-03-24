import React from 'react';
import Container from '../../Atoms/container/container';
import ApresentationItem from '../../Atoms/ApresentationItem/apresetation_item';

const CalculateAge = (birthday) => {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const age = CalculateAge("1995/05/09")

const Apresentation = () => (
    <Container tag='ul' flex fw percent='80' className="P-15">
        <ApresentationItem
            full
            item={"Ítalo Campana Drago"}
            title={"Nome"} />
        <ApresentationItem
            full
            item={"Full Stack Developer / Digital Designer"}
            title={"Classe"} />
        <ApresentationItem
            item={<a href='https://github.com/DCitalo' rel="noopener noreferrer" target='_blank'>DCitalo</a>}
            title={"GitHub"} />
        <ApresentationItem
            item={<a href="mailto:cd_italo@hotmail.com?subject=Contato" rel="noopener noreferrer" target="_blank">cd_italo@hotmail.com</a>}
            title={"E-mail"} />
        <ApresentationItem
            item={<a href="https://api.whatsapp.com/send?phone=5511955569422" rel="noopener noreferrer" target="_blank">(11) 9-5556-9422</a>}
            title={"Celular"} />
        <ApresentationItem
            item={age + " anos"}
            title={"Idade"} />
        <ApresentationItem
            item={"São Paulo"}
            title={"Cidade"} />
        <ApresentationItem
            item={"São Paulo"}
            title={"Estado"} />
        <ApresentationItem
            item={"#000000"}
            title={"Cabelo"} />
        <ApresentationItem
            item={"Leal/Neutro"}
            title={"Tendência"} />
    </Container>
)

export default Apresentation;
