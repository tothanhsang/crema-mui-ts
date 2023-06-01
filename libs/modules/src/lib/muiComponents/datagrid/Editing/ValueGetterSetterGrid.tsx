import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridValueSetterParams,
  GridCellValue,
} from '@mui/x-data-grid';

function getFullName(params: GridValueGetterParams) {
  return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

function setFullName(params: GridValueSetterParams) {
  const [firstName, lastName] = params.value!.toString().split(' ');
  return { ...params.row, firstName, lastName };
}

function parseFullName(value: GridCellValue) {
  return String(value)
    .split(' ')
    .map((str) => (str.length > 0 ? str[0].toUpperCase() + str.slice(1) : ''))
    .join(' ');
}

export default function ValueParserSetterGrid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={defaultRows} columns={columns} />
    </div>
  );
}

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', width: 130, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 130, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    editable: true,
    valueGetter: getFullName,
    valueSetter: setFullName,
    valueParser: parseFullName,
    sortComparator: (v1, v2) => v1!.toString().localeCompare(v2!.toString()),
  },
];

const defaultRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
];