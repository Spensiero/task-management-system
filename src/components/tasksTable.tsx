
import React from "react";
import Table from "./common/table";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDeleteOutline, MdOutlineTask, MdOutlineDoneOutline, MdOutlineAssistantPhoto } from "react-icons/md";
import { IoIosBug } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import styled from "@emotion/styled";
import { ITasksTable } from "@/interfaces/interfaces";

const Button = styled.button<{ isRed?: boolean }>`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  margin-left:20px;
  color: ${({ isRed }) => (isRed ? "red" : "inherit")};
`;

export default function TasksTable({setModalAndAction, data, deleteTask}: ITasksTable) {
  const columns = [
    {
      accessorKey: 'title',
      header: 'Title',
      size: 200,
      // @ts-ignore 
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: 'taskType',
      header: 'Type',
      size: 70,
      // @ts-ignore 
      Cell: ({ cell }) => {
        let iconToShow;
        switch (cell.row.original.taskType) {
          case "B":
            iconToShow = <IoIosBug title="Bug"/>;
            break;
          case "T":
            iconToShow = <MdOutlineTask title="Task"/>;
            break;
          default:
            iconToShow = <MdOutlineTask title="Task"/>;
            break;
        }
        return <span>{iconToShow}</span>;
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 70,
      // @ts-ignore 
      Cell: ({ cell }) => {
        let iconToShow;
        switch (cell.row.original.status) {
          case 'D':
            iconToShow = <MdOutlineDoneOutline title="Done"/>;
            break;
          case 'T':
            iconToShow = <MdOutlineAssistantPhoto title="To do"/>;
            break;
          case 'P':
            iconToShow = <GiProgression title="Progress"/>;
            break;
          default:
            iconToShow = <MdOutlineAssistantPhoto title="To do"/>;
            break;
        }
        return <span>{iconToShow}</span>;
      },
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      size: 200,
      // @ts-ignore 
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      header: 'Actions',
      size: 50,
      // @ts-ignore 
      Cell: ({ cell }) => 
          <>
            <Button title="Update" onClick={()=> setModalAndAction(true, "U", cell.row.original.id)}><RxUpdate/></Button>
            <Button title="Delete" type="button" isRed={true} onClick={()=> deleteTask(cell.row.original.id)}><MdOutlineDeleteOutline  /></Button>
          </>,
    }
  ];

  return (
    // @ts-ignore 
    <Table data={data} columns={columns}/>
  );
}
