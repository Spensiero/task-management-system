
import React from "react";
import styled from "@emotion/styled";
import { MdOutlineAddTask } from "react-icons/md"; 
import { IAddButton } from "@/interfaces/interfaces";

const Button = styled.button`
  background-color: #ffffff;
  color: #333333;
  border: none;
  padding: 16px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0px 0px 0px 12px rgba(255, 255, 255, 0.3);
  }
`;

export default function AddButton({ onClick }: IAddButton) {
  return (
    <Button onClick={onClick}>
        <MdOutlineAddTask title="Add Task"/>
    </Button>
  );
}
