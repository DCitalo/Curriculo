import React from "react";
import Container from "../../Atoms/container";
import styled from "styled-components";

const Me = () => {
  return (
    <ContainerMe percent="20" flex fw>
      <Container flex className="photoMe">
        <img src="images/me.png" alt="Foto de Perfil" className="perfil" />
      </Container>
      <ContainerInfos>
      <Container className="name">
        <p>Ítalo Campana Drago</p>
      </Container>
      <Container
        tag="a"
        link="https://github.com/dcitalo"
        rel="nofollow"
        target="_blank"
        percent="100"
        className="github"
        flex
        fw
      >
        <i className="fab fa-github"></i> DCitalo
      </Container>
      <Container
        tag="a"
        link="https://twitter.com/CD_italo"
        rel="nofollow"
        target="_blank"
        percent="100"
        className="twitter"
        flex
        fw
      >
        <i className="fab fa-twitter"></i> @CD_italo
      </Container>
      </ContainerInfos>
    </ContainerMe> 
  );
};

const ContainerMe = styled(Container)`
  margin: 0 auto;
  border-radius: 5px;
  align-content:center;
`;

const ContainerInfos = styled(Container)`
  border:1px solid #000;
`;

export default Me;
