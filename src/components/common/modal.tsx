import React from 'react';
import styled from "@emotion/styled";
import { IModal } from '@/interfaces/interfaces';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Modal = ({children, actionType, arrActions, onCloseModal }: IModal) => {
const [Child] = React.Children.toArray(children);
  return (
    <ModalWrapper onClick={onCloseModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{arrActions.find((o)=> o.type == actionType)?.label}</h2>
        {Child}
        </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
