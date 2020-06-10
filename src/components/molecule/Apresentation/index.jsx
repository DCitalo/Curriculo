import React, { useState } from "react";
import Container from "../../Atoms/container";
import ApresentationItem from "../../Atoms/ApresentationItem/apresetation_item";
import styled from "styled-components";

const CalculateAge = (birthday) => {
  var today = new Date();
  var birthDate = new Date(birthday);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const age = CalculateAge("1995/05/09");

const Apresentation = (props) => {
  const toggleModal = () => {
    props.setModalState({
      isOpen: !props.modalState.isOpen,
    });
  };
  return (
    <ContainerInfo flex fw percent="70" className="P-15">
      <Container percent="100" className="mail">
        <button onClick={toggleModal}>
          <i class="fas fa-envelope"></i> Entre em contato!
        </button>
      </Container>
      <ApresentationItem full item={"Designer  Digital"} title={"Classe"} />

      <ApresentationItem
        item={
          <a
            href="https://api.whatsapp.com/send?phone=5511955569422"
            rel="noopener noreferrer"
            target="_blank"
          >
            (11) 9-5556-9422
          </a>
        }
        title={"Celular"}
      />
      <ApresentationItem item={age + " anos"} title={"Idade"} />
      <ApresentationItem item={"São Paulo"} title={"Cidade"} />
      <ApresentationItem item={"São Paulo"} title={"Estado"} />
      <ApresentationItem item={"#000000"} title={"Cabelo"} />
      <ApresentationItem item={"Leal/Neutro"} title={"Tendência"} />
    </ContainerInfo>
  );
};

const ContainerInfo = styled(Container)`
  background: #eaf8f6;
`;

export default Apresentation;
