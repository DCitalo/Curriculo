import React, { useState } from "react";
import Header from "../../organisms/Header/header";
import Section from "../../organisms/Section/section";
import styled from "styled-components";
import Modal from "../../Atoms/Modal";

let Ficha = (props) => {
  const [modalState, setModalState] = useState({ isOpen: false });

  const toggleModal = () => {
    setModalState({
      isOpen: !modalState.isOpen,
    });
  };
  return (
    <div className={props.className}>
      <Modal show={modalState.isOpen} onClose={toggleModal}></Modal>
      <Header modalState={modalState} setModalState={setModalState} />
      <Section />
    </div>
  );
};

Ficha = styled(Ficha)`
  background: #fff;
`;

export default Ficha;
