
import React from "react";
import Table from "./common/table";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDeleteOutline, MdOutlineTask, MdOutlineDoneOutline, MdOutlineAssistantPhoto } from "react-icons/md";
import { IoIosBug } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import styled from "@emotion/styled";
import { ITasksTable } from "@/interfaces/interfaces";

  const data = [
    {
        id:1,
        taskType: "B",
        title: "Title 1",
        status: "P",
        assignee: "Pippo"
    },
    {
        id:2,
        taskType: "T",
        title: "Title 2",
        status: "D",
        assignee: "Pluto"
    },
    {
        id:3,
        taskType: "B",
        title: "Title 3",
        status: "P",
        assignee: "Pippo"
    },
    {
        id:4,
        taskType: "T",
        title: "Title 4",
        status: "T",
        assignee: "Pluto"
    },
    {
        id:5,
        taskType: "B",
        title: "Title 5",
        status: "T",
        assignee: "Pippo"
    },
    {
        id:6,
        taskType: "TASK",
        title: "Title 6",
        status: "D",
        assignee: "Pluto"
    },
    {
        id:7,
        taskType: "B",
        title: "Title 7",
        status: "P",
        assignee: "Pippo"
    },
    {
        id:8,
        taskType: "T",
        title: "Title 8",
        status: "D",
        assignee: "Pluto"
    },
    {
        id:9,
        taskType: "B",
        title: "Title 9",
        status: "T",
        assignee: "Pippo"
    },
    {
        id:10,
        taskType: "T",
        title: "Title 10",
        status: "D",
        assignee: "Pluto"
    },
  ];

const Button = styled.button<{ isRed?: boolean }>`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  margin-left:20px;
  color: ${({ isRed }) => (isRed ? "red" : "inherit")};
`;

export default function TasksTable({setModalAndAction}: ITasksTable) {
  const columns = [
    {
      accessorKey: 'title',
      header: 'Title',
      size: 200,
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: 'taskType',
      header: 'Type',
      size: 70,
      Cell: ({ cell }) => {
        let iconToShow;
        switch (cell.row.original.taskType) {
          case 'B':
            iconToShow = <IoIosBug title="Bug"/>;
            break;
          case 'T':
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
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      header: 'Actions',
      size: 50,
      Cell: ({ cell }) => 
          <>
            <Button title="Update" onClick={()=> setModalAndAction(true, "U", cell.row.original.id)}><RxUpdate/></Button>
            <Button title="Delete" type="button" isRed={true} onClick={()=>{console.log(cell.row.original)}}><MdOutlineDeleteOutline  /></Button>
          </>,
    }
  ];

  return (
    <Table data={data} columns={columns}/>
  );
}
