import React from 'react';
import PropTypes from 'prop-types';

import Transaction from './Transaction';
import { Tbody, Table, Tr, Th } from './Transactions.styled';

export default function TransactionHistory({ items }) {
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
        {items.map(({ id, type, amount, currency }) => <Transaction key={id} type={type} amount={amount} currency={currency} />)}
      </Tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}
