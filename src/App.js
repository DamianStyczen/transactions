import React from 'react';
import TransactionList from './components/transaction-list';
import Section from './components/section';
import Balance from './components/balance';
import ExchangeRate from './components/exchange-rate';

function App() {
  const exchangeRate = 4.16;
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
    <main>
      <Section title='Current exchange rate'>
        <ExchangeRate exchangeRate={exchangeRate} />
      </Section>
      <Section title='Your balance'>
        <Balance transactions={transactions} />
      </Section>
      <Section title='Your transactions'>
        <TransactionList transactions={transactions} />
      </Section>
    </main>
  );
}

export default App;
