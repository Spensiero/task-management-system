import React from 'react';
import styled from "@emotion/styled";
import { IConfirmDeleteModal } from '@/interfaces/interfaces';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ConfirmationDialog = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: red;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;

const CancelButton = styled(Button)`
  background-color: #398CD3;
`;

const ConfirmDeleteModal = ({ onCancel, onConfirm }: IConfirmDeleteModal) => {
  return (
    <ModalWrapper>
      <ConfirmationDialog>
        <Message>Are you sure you want to delete this item?</Message>
        <ButtonWrapper>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <Button onClick={onConfirm}>Confirm</Button>
        </ButtonWrapper>
      </ConfirmationDialog>
    </ModalWrapper>
  );
};
export default ConfirmDeleteModal;