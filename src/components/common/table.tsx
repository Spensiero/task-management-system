
import React from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from 'material-react-table';
import styled from "@emotion/styled";

const StyledTableWrapper = styled('div')`
   padding-bottom: 50px;
`;

export default function Table({data, columns} : ITable) {

        const table = useMaterialReactTable({
            columns,
            data,
            enableColumnOrdering: true,
            enableRowSelection: true,
            enablePagination: false,
            muiTableContainerProps: { sx: { maxHeight: "450px"} },
          });
          
  return (
   <StyledTableWrapper>
        <MaterialReactTable table={table} />
   </StyledTableWrapper>
  );
}