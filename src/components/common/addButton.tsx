
import React, { ReactEventHandler } from "react";
import styled from "@emotion/styled";
import { MdOutlineAddTask } from "react-icons/md"; 

const Button = styled.button`
  margin: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  background-color: #ffffff;
  color: #333333;
  border: none;
  border-radius: 50%;
  padding: 16px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0px 0px 0px 12px rgba(255, 255, 255, 0.3);
  }
`;

interface IAddButton {
    onClick: ReactEventHandler
}

export default function AddButton({ onClick }: IAddButton) {
  return (
    <Button onClick={onClick}>
        <MdOutlineAddTask title="Add Task"/>
    </Button>
  );
}
