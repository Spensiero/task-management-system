
import React from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from 'material-react-table';
import { ITable } from "@/interfaces/interfaces";

export default function Table({data, columns} : ITable) {

        const table = useMaterialReactTable({
            columns,
            data,
            enableColumnOrdering: true,
            enablePagination: false,
            enableColumnPinning: true,
            layoutMode: 'grid', 
            initialState: { columnPinning: { left: [columns[0].accessorKey] } },
            muiTableContainerProps: { sx: { maxHeight: "450px" } },
          });
          
  return (
    <MaterialReactTable table={table}/>
  );
}