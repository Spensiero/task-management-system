
import React from "react";
import Table from "./common/table";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDeleteOutline   } from "react-icons/md";
import styled from "@emotion/styled";

  const data = [
    {
        taskType: "BUG",
        title: "Title 1",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 2",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 3",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 4",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 5",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 6",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 7",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 8",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 9",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 10",
        status: "Done",
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

export default function TasksTable() {
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
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 70,
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
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
            <Button title="Modify" type="button" onClick={()=>{console.log(cell.row.original)}}><RxUpdate/></Button>
            <Button title="Delete" type="button" isRed={true} onClick={()=>{console.log(cell.row.original)}}><MdOutlineDeleteOutline  /></Button>
          </>,
    }
  ];

  return (
    <Table data={data} columns={columns}/>
  );
}
