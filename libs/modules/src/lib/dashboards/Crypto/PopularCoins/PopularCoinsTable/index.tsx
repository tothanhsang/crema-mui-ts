import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import { PopularCoinsType } from '@crema/models/dashboards/Crypto';

type PopularCoinsTableProps= {
  popularCoins: PopularCoinsType[];
}

const PopularCoinsTable: React.FC<PopularCoinsTableProps> = ({
  popularCoins,
}) => {
  return (
    <AppTableContainer>
      <Table>
        <TableHead
          sx={{
            borderBottom: '0 none',
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody>
          {popularCoins.map((row) => (
            <TableItem key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default PopularCoinsTable;
