import React from "react";
import Me from "../../molecule/Me";
import styled from "styled-components";
import Apresentation from "../../molecule/Apresentation";
import Container from "../../Atoms/container";

const Header = (props) => {
  return (
    <Container tag="header" className={props.className} flex fw>
      <Me />
      <Apresentation
        modalState={props.modalState}
        setModalState={props.setModalState}
      />
    </Container>
  );
};

export default Header;
