import React from 'react';

import Transaction from './Transaction';
import { Tbody, Table, Tr, Th } from './Transactions.styled';

export default function TransactionHistory( {items} ) {
  return (
    <Table>
      <thead>
        <Tr head={true}>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>
      <Tbody>
      {items.map(item =>  <Transaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} />)}
       
      </Tbody>
    </Table>
  );
}
