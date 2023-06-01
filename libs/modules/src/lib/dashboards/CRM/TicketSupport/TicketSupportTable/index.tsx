import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import { TicketSupportDataType } from '@crema/models/dashboards/CRM';

type TicketSupportTableProps= {
  ticketSupportData: TicketSupportDataType[];
}

const TicketSupportTable: React.FC<TicketSupportTableProps> = ({
  ticketSupportData,
}) => {
  return (
    <AppTableContainer sxStyle={{ maxHeight: 480 }}>
      <Table>
        <TableHead
          sx={{
            borderBottom: '0 none',
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody
          sx={{
            borderBottom: '0 none',
          }}
        >
          {ticketSupportData.map((row, index) => (
            <TableItem key={row.name + index} row={row} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default TicketSupportTable;
