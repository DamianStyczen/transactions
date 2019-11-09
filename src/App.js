import React from 'react';
import TransactionList from './components/transaction-list';
import Section from './components/section';

function App() {
  const transactions = [
    {
      id: '1',
      value: 100,
      category: 'gift'
    },
    {
      id: '2',
      value: -50,
      category: 'groceries'
    }
  ];

  return (
    <Section title='Your transactions'>
      <TransactionList transactions={transactions} />
    </Section>
  );
}

export default App;
